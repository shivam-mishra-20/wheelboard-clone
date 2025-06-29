import React from "react";

const MissionVision = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="mb-4">
              To revolutionize mobility through innovative wheel technology that
              enhances performance, reliability, and sustainability across all
              transportation sectors.
            </p>
            <p>
              We are committed to developing solutions that not only meet
              current industry standards but set new benchmarks for quality and
              efficiency.
            </p>
          </div>

          <div className="bg-blue-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="mb-4">
              To be the global leader in wheel technology, recognized for our
              innovation, quality, and contribution to a more sustainable and
              mobile world.
            </p>
            <p>
              We envision a future where our products are the preferred choice
              for mobility solutions across diverse industries and applications
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
