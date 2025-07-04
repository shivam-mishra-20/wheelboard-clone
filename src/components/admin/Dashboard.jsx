import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/Logo.png"
              alt="Wheelboard Logo"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="ml-3 text-xl font-bold text-gray-900">
              Wheelboard Admin
            </h1>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-gray-600">{user?.email || "Admin"}</span>
            <button
              onClick={handleLogout}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Dashboard navigation */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-8">
            {["overview", "contacts", "settings"].map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${
                  activeTab === tab
                    ? "border-[#0052CC] text-[#0052CC]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                } transition-colors`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard content */}
        <div className="bg-white shadow rounded-lg p-6">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Dashboard Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h3 className="text-lg font-medium text-gray-800">
                    Total Contacts
                  </h3>
                  <p className="text-3xl font-bold text-[#0052CC]">
                    {contacts.length}
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-100">
                  <h3 className="text-lg font-medium text-gray-800">
                    New Today
                  </h3>
                  <p className="text-3xl font-bold text-[#FF6D1B]">
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
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                  <h3 className="text-lg font-medium text-gray-800">
                    System Status
                  </h3>
                  <p className="text-xl font-bold text-green-600">
                    All Systems Operational
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "contacts" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Submissions
              </h2>

              {contacts.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Company
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Message
                        </th>
                        <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {contacts.map((contact) => (
                        <tr key={contact.id} className="hover:bg-gray-50">
                          <td className="py-4 px-6 text-sm font-medium text-gray-900">
                            {contact.name || "N/A"}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500">
                            {contact.email || "N/A"}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500">
                            {contact.company || "N/A"}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500">
                            {contact.message
                              ? contact.message.substring(0, 50) +
                                (contact.message.length > 50 ? "..." : "")
                              : "N/A"}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500">
                            {contact.timestamp
                              ? contact.timestamp.toDate().toLocaleDateString()
                              : "N/A"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No contact submissions found.</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Admin Settings
              </h2>
              <p className="text-gray-500 mb-4">
                Manage your administrator settings here.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900">Change Password</h3>
                <p className="text-sm text-gray-500 mb-4">
                  For security reasons, please use the Firebase console to
                  change admin passwords.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
