<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen, Target, Heart, Star, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Users, label: '1800+', description: 'Students' },
    { icon: GraduationCap, label: '81', description: 'Expert Teachers' },
    { icon: Award, label: '95%', description: 'Success Rate' },
    { icon: Calendar, label: '25+', description: 'Years of Excellence' },
  ];

  const values = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Committed to providing quality education with modern teaching methodologies and comprehensive curriculum.'
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Focusing on overall personality development through academics, sports, and cultural activities.'
    },
    {
      icon: Target,
      title: 'Future Ready',
      description: 'Preparing students for competitive exams and future challenges with specialized programs like NEEV.'
    },
    {
      icon: Star,
      title: 'Values & Ethics',
      description: 'Instilling moral values and ethical principles to create responsible citizens of tomorrow.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Shakti Shanti Academy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nurturing young minds since 1999 with a commitment to excellence in education 
              and holistic development of every student.
            </p>
          </motion.div>

          {/* School Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
              <img 
                src="/assest/School.png" 
                alt="Shakti Shanti Academy Building" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Beautiful Campus</h3>
                  <p className="text-gray-600">Located in the serene environment of Ami, Ambika Sthan, Dighwara, Saran, Bihar</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.label}</div>
                <div className="text-gray-600 text-sm">{achievement.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Shakti Shanti Academy is a co-educational institution established on <strong>7th August 1999</strong>. 
                  It is run by S.S. Trust Patna (Bihar), an organization registered under the Trust Registration Act. 
                  The school began with just 80 students and four teaching staff, located just 3 km away from 
                  Dighwara Railway Station towards the west in the vicinity of goddess Maa Ambika Bhawani, 
                  Ambika Sthan, Ami, Saran.
                </p>

                <p>
                  Today, the school has transformed from a small beginning to a thriving educational institution 
                  and is affiliated to <strong>CBSE, BHARAT</strong>, up to 10+2. We now have classes from 
                  Std. I to Std. XII with a strength of <strong>1800 students</strong> and a devoted team of 
                  <strong>81 staff members</strong>.
                </p>

                <p>
                  The true essence of SSA lies not in its infrastructure of four walls but in its overall 
                  purpose of imparting quality education that includes the art of shaping individual personalities 
                  through physical, emotional, intellectual, and spiritual development. The school devotes itself 
                  assiduously to nurturing students in such a way that they excel in all walks of life, make a 
                  mark in every field of human activities, and become worthy citizens of the 21st century.
                </p>

                <p>
                  Our students are not only infused with qualities of character but also equipped with the 
                  capability to withstand the challenges of modern-day life while maintaining strong moral values. 
                  The true riches of SSA lie in producing gentle SSAians who are truthful and represent our 
                  school motto with pride.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our educational philosophy and shape our students' character
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Legacy of Excellence
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of our journey in shaping the future leaders of tomorrow. 
              Experience quality education with values and character development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/apply-admission"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for Admission
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
=======

import React from 'react';


const About: React.FC = () => {
       return (
	       <div className="max-w-3xl mx-auto py-16 px-4">
		       {/* School Image with bold, diagonal background */}
		       <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
			       <div 
				       className="p-4 flex justify-center items-center"
				       style={{
					       background: 'linear-gradient(135deg, #2563eb 0 60%, #fde047 60% 100%)',
					       borderRadius: '1rem',
				       }}
			       >
				       <img 
					       src="/assest/School.png" 
					       alt="S.S. Academy Building" 
					       className="rounded-xl w-full max-h-80 object-cover border-8 border-white shadow-md"
				       />
			       </div>
		       </div>
		       <h2 className="text-3xl font-bold mb-4">About Us</h2>
		       <p className="text-lg text-gray-700 mb-4">
			       This S.S. Academy is a co-educational institution established on 7th Aug. 1999. It is run by S.S. Trust Patna (Bihar) an organization registered under the Trust Registration Act. The school began with 80 students and four teaching staff is just 3 km away from Dighwara Railway Station towards the west in the vicinity of goddess Maa Ambika Bhawani, Ambika Sthan, Ami, Saran.
		       </p>
		       <p className="text-gray-600">
			       Today the school has turned from an ice ball to an avalanche and is affiliated to CBSE, BHARAT, up to 10+2.  We have classes from Std.- I to Std.- XII with a strength of 1800 students and a devoted team of 81 staff. The true essence of SSA lies, not in its infrastructure of four walls but its overall purpose of imparting quality education includes the art of shaping individual's a personality through physical, emotional, intellectual and spiritual development. The school, therefore, devotes itself assiduously to nurturing of students in such a way that they excel in all walks of life, make a mark in every field of human activities and become worthy citizens of 21st century not only infused with qualities of character but also a capability to withstand the onslaught of modern day degeneration of values. The true riches of SSA lies in producing gentle SSAians who are truthful and represent the school motto.
		       </p>
	       </div>
       );
};

export default About;
>>>>>>> 4cc650e723a573cbd852d2ec4570084b885198d2
