import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchContacts();
      } else {
        navigate("/admin/login");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchContacts = async () => {
    try {
      const contactsRef = collection(db, "contact_messages");
      const q = query(contactsRef, orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);

      const contactsList = [];
      querySnapshot.forEach((doc) => {
        contactsList.push({ id: doc.id, ...doc.data() });
      });

      setContacts(contactsList);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleViewDetails = (contact) => {
    setSelectedContact(contact);
    setEditedContact({ ...contact });
    setModalOpen(true);
    setIsEditing(false);
    setDeleteConfirm(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedContact(null);
    setIsEditing(false);
    setDeleteConfirm(false);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditedContact({ ...selectedContact });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({
      ...editedContact,
      [name]: value,
    });
  };

  const handleSaveChanges = async () => {
    try {
      const contactRef = doc(db, "contact_messages", selectedContact.id);
      await updateDoc(contactRef, {
        name: editedContact.name,
        email: editedContact.email,
        company: editedContact.company,
        message: editedContact.message,
      });

      // Update the contacts list with the edited contact
      const updatedContacts = contacts.map((contact) =>
        contact.id === selectedContact.id
          ? { ...contact, ...editedContact }
          : contact
      );

      setContacts(updatedContacts);
      setSelectedContact({ ...selectedContact, ...editedContact });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const handleDeleteContact = async () => {
    if (!deleteConfirm) {
      setDeleteConfirm(true);
      return;
    }

    try {
      const contactRef = doc(db, "contact_messages", selectedContact.id);
      await deleteDoc(contactRef);

      // Remove the deleted contact from the list
      const updatedContacts = contacts.filter(
        (contact) => contact.id !== selectedContact.id
      );
      setContacts(updatedContacts);
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // Navigation items with icons
  const navItems = [
    {
      id: "overview",
      label: "Overview",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      id: "contacts",
      label: "Contacts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      ),
    },
    {
      id: "settings",
      label: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin h-12 w-12 border-4 border-[#0052CC] rounded-full border-t-transparent mb-4"></div>
          <p className="text-[#0052CC] font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "16rem", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-10 hidden lg:flex flex-col backdrop-blur-md bg-white/70 border-r border-gray-200/50 shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src="/Logo.png"
                    alt="Wheelboard Logo"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6D1B] bg-clip-text text-transparent">
                    Wheelboard
                  </h1>
                </div>
              </div>

              <div className="flex-1 px-3 py-3">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className={`flex items-center w-full px-3 py-3 text-sm font-medium rounded-lg transition-all ${
                        activeTab === item.id
                          ? "bg-[#0052CC] text-white shadow-md"
                          : "text-gray-600 hover:bg-blue-50"
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-gray-200/50">
                <div className="flex items-center p-2 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-[#0052CC] flex items-center justify-center text-white font-bold">
                      {user?.email ? user.email.charAt(0).toUpperCase() : "A"}
                    </div>
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-700 truncate">
                      {user?.email || "Admin"}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="text-xs text-gray-500 hover:text-[#FF6D1B] transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Mobile sidebar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white border-b border-gray-200/50 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex items-center ml-3">
              <img
                src="/Logo.png"
                alt="Wheelboard Logo"
                className="h-12 w-12 rounded-full"
              />
              <h1 className="ml-2 text-lg font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6D1B] bg-clip-text text-transparent">
                Wheelboard
              </h1>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-gray-500 hover:text-[#FF6D1B] p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-20">
            <div
              className="fixed inset-0 bg-opacity-50 backdrop-blur-xs"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-64 flex flex-col backdrop-blur-xl bg-white/80 shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/Logo.png"
                      alt="Wheelboard Logo"
                      className="h-10 w-10 rounded-full"
                    />
                    <h1 className="ml-3 text-xl font-bold bg-gradient-to-r from-[#0052CC] to-[#FF6D1B] bg-clip-text text-transparent">
                      Wheelboard
                    </h1>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 px-3 py-3">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className={`flex items-center w-full px-3 py-3 text-sm font-medium rounded-lg transition-all ${
                        activeTab === item.id
                          ? "bg-[#0052CC] text-white shadow-md"
                          : "text-gray-600 hover:bg-blue-50"
                      }`}
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-gray-200/50">
                <div className="flex items-center p-2 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-[#0052CC] flex items-center justify-center text-white font-bold">
                      {user?.email ? user.email.charAt(0).toUpperCase() : "A"}
                    </div>
                  </div>
                  <div className="ml-3 min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-700 truncate">
                      {user?.email || "Admin"}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="text-xs text-gray-500 hover:text-[#FF6D1B] transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-md bg-white/50 shadow-lg rounded-xl p-6 border border-white/20"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#0052CC]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Dashboard Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-blue-600/20 rounded-xl p-6 border border-blue-100/50 shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-800">
                          Total Contacts
                        </h3>
                        <span className="p-2 rounded-lg bg-blue-100/50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#0052CC]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                          </svg>
                        </span>
                      </div>
                      <p className="text-3xl font-bold text-[#0052CC] mt-4">
                        {contacts.length}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Total messages received
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="backdrop-blur-sm bg-gradient-to-br from-orange-500/10 to-orange-600/20 rounded-xl p-6 border border-orange-100/50 shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-800">
                          New Today
                        </h3>
                        <span className="p-2 rounded-lg bg-orange-100/50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#FF6D1B]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="text-3xl font-bold text-[#FF6D1B] mt-4">
                        {
                          contacts.filter((contact) => {
                            if (!contact.timestamp) return false;
                            const contactDate = contact.timestamp.toDate();
                            const today = new Date();
                            return (
                              contactDate.setHours(0, 0, 0, 0) ===
                              today.setHours(0, 0, 0, 0)
                            );
                          }).length
                        }
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Messages from today
                      </p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="backdrop-blur-sm bg-gradient-to-br from-green-500/10 to-green-600/20 rounded-xl p-6 border border-green-100/50 shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-800">
                          System Status
                        </h3>
                        <span className="p-2 rounded-lg bg-green-100/50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="text-xl font-bold text-green-600 mt-4">
                        All Systems Operational
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Updated just now
                      </p>
                    </motion.div>
                  </div>

                  <div className="mt-8 backdrop-blur-sm bg-white/40 rounded-xl p-6 border border-gray-100/50 shadow-md">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Recent Activity
                    </h3>
                    {contacts.length > 0 ? (
                      <div className="space-y-3">
                        {contacts.slice(0, 3).map((contact) => (
                          <div
                            key={contact.id}
                            className="p-3 rounded-lg bg-white/50 border border-gray-100/50 hover:bg-white/80 transition-colors"
                          >
                            <div className="flex justify-between">
                              <span className="font-medium text-gray-800">
                                {contact.name || "Anonymous"}
                              </span>
                              <span className="text-xs text-gray-500">
                                {contact.timestamp
                                  ? contact.timestamp
                                      .toDate()
                                      .toLocaleDateString()
                                  : "N/A"}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 truncate">
                              {contact.message || "No message"}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-4">
                        No recent activity
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "contacts" && (
                <motion.div
                  key="contacts"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-md bg-white/50 shadow-lg rounded-xl p-6 border border-white/20"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#0052CC]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    Contact Submissions
                  </h2>

                  {contacts.length > 0 ? (
                    <>
                      {/* Mobile card view */}
                      <div className="md:hidden space-y-4">
                        {contacts.map((contact) => (
                          <motion.div
                            key={contact.id}
                            whileHover={{ scale: 1.01 }}
                            className="backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-gray-100/50 shadow-md"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-medium text-gray-900">
                                {contact.name || "Anonymous"}
                              </h3>
                              <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                                {contact.timestamp
                                  ? contact.timestamp
                                      .toDate()
                                      .toLocaleDateString()
                                  : "N/A"}
                              </span>
                            </div>

                            <div className="space-y-2 text-sm">
                              <div className="flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-gray-500 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                                <span className="text-gray-600">
                                  {contact.email || "No email"}
                                </span>
                              </div>

                              {contact.company && (
                                <div className="flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-500 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                  </svg>
                                  <span className="text-gray-600">
                                    {contact.company}
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <p className="text-gray-700 text-sm">
                                {contact.message || "No message content"}
                              </p>
                            </div>

                            <div className="mt-4 flex justify-end">
                              <button
                                onClick={() => handleViewDetails(contact)}
                                className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center"
                              >
                                View details
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3 ml-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Desktop table view */}
                      <div className="hidden md:block backdrop-blur-sm bg-white/40 rounded-xl p-4 border border-gray-100/50 shadow-md overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200/70">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50/50 rounded-tl-lg"
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50/50"
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50/50"
                                >
                                  Company
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50/50"
                                >
                                  Message
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50/50"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50/50 rounded-tr-lg"
                                >
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white/20 divide-y divide-gray-200/70">
                              {contacts.map((contact, idx) => (
                                <tr
                                  key={contact.id}
                                  className={`hover:bg-blue-50/50 transition-colors ${
                                    idx === contacts.length - 1
                                      ? "rounded-b-lg"
                                      : ""
                                  }`}
                                >
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                      {contact.name || "N/A"}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                      {contact.email || "N/A"}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                      {contact.company || "N/A"}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="text-sm text-gray-500 max-w-xs truncate">
                                      {contact.message || "N/A"}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                      {contact.timestamp
                                        ? contact.timestamp
                                            .toDate()
                                            .toLocaleDateString()
                                        : "N/A"}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                      onClick={() => handleViewDetails(contact)}
                                      className="text-blue-600 hover:text-blue-800"
                                    >
                                      View
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="backdrop-blur-sm bg-white/40 rounded-xl p-12 border border-gray-100/50 shadow-md text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-gray-400 mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                      <p className="text-gray-500 text-lg">
                        No contact submissions found.
                      </p>
                      <p className="text-gray-400 mt-2">
                        Contact messages will appear here when customers submit
                        the form.
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "settings" && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-md bg-white/50 shadow-lg rounded-xl p-6 border border-white/20"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-[#0052CC]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Admin Settings
                  </h2>

                  <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 border border-gray-100/50 shadow-md mb-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#0052CC] flex items-center justify-center text-white font-bold mr-4">
                        {user?.email ? user.email.charAt(0).toUpperCase() : "A"}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">
                          {user?.email || "Admin"}
                        </h3>
                        <p className="text-sm text-gray-500">Administrator</p>
                      </div>
                    </div>
                  </div>

                  <div className="backdrop-blur-sm bg-white/40 rounded-xl p-6 border border-gray-100/50 shadow-md">
                    <h3 className="font-medium text-gray-900 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-[#0052CC]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Change Password
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 mt-2">
                      For security reasons, please use the Firebase console to
                      change admin passwords.
                    </p>
                    <button
                      className="text-white bg-gradient-to-r from-[#0052CC] to-blue-600 hover:from-blue-600 hover:to-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md transition-all"
                      disabled
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Access Firebase Console
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Contact Details Modal */}
        <AnimatePresence>
          {modalOpen && selectedContact && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-30"
                onClick={handleCloseModal}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed inset-0 z-40 overflow-y-auto flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-w-lg w-full backdrop-blur-xl bg-white/90 rounded-2xl shadow-2xl border border-white/20 p-6 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0052CC] to-[#FF6D1B]"></div>

                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {isEditing ? "Edit Contact" : "Contact Details"}
                    </h3>
                    <button
                      onClick={handleCloseModal}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={editedContact.name || ""}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={editedContact.email || ""}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={editedContact.company || ""}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={editedContact.message || ""}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0052CC]"
                        ></textarea>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-full bg-[#0052CC] flex items-center justify-center text-white font-bold">
                          {selectedContact.name
                            ? selectedContact.name.charAt(0).toUpperCase()
                            : "?"}
                        </div>
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                          {selectedContact.timestamp
                            ? selectedContact.timestamp
                                .toDate()
                                .toLocaleDateString() +
                              " " +
                              selectedContact.timestamp
                                .toDate()
                                .toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })
                            : "N/A"}
                        </span>
                      </div>

                      <div className="backdrop-blur-sm bg-white/40 rounded-lg p-4 border border-gray-100/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Name</p>
                            <p className="font-medium">
                              {selectedContact.name || "N/A"}
                            </p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">
                              {selectedContact.email || "N/A"}
                            </p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">Company</p>
                            <p className="font-medium">
                              {selectedContact.company || "N/A"}
                            </p>
                          </div>

                          <div>
                            <p className="text-sm text-gray-500">
                              Submission ID
                            </p>
                            <p className="font-medium text-xs truncate">
                              {selectedContact.id}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 mb-2">Message</p>
                        <div className="backdrop-blur-sm bg-white/40 rounded-lg p-4 border border-gray-100/50">
                          <p className="whitespace-pre-wrap">
                            {selectedContact.message || "No message content"}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex justify-end space-x-3">
                    {isEditing ? (
                      <>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveChanges}
                          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#0052CC] to-[#0066FF] rounded-lg hover:from-[#0045AD] hover:to-[#0052CC] focus:outline-none shadow-md"
                        >
                          Save Changes
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={handleDeleteContact}
                          className={`px-4 py-2 text-sm font-medium rounded-lg focus:outline-none ${
                            deleteConfirm
                              ? "text-white bg-red-600 hover:bg-red-700"
                              : "text-red-600 bg-white border border-red-300 hover:bg-red-50"
                          }`}
                        >
                          {deleteConfirm ? "Confirm Delete" : "Delete"}
                        </button>
                        <button
                          onClick={handleEditToggle}
                          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#0052CC] to-[#0066FF] rounded-lg hover:from-[#0045AD] hover:to-[#0052CC] focus:outline-none shadow-md"
                        >
                          Edit Contact
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
