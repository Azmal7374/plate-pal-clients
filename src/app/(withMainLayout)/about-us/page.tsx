/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */



const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'John is passionate about sports and fitness, with over 20 years of experience in the industry.',
      image: 'https://img.freepik.com/premium-photo/man-warming-up-morning-workout-outdoors_739463-3834.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    },
    {
      name: 'Jane Smith',
      role: 'Head Coach',
      bio: 'Jane leads our coaching team, bringing her expertise in training and development.',
      image: 'https://img.freepik.com/free-photo/person-playing-tennis-game-winter-time_23-2149274766.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    },
    {
      name: 'Michael Johnson',
      role: 'Facilities Manager',
      bio: 'Michael ensures that our facilities are always in top condition and ready for use.',
      image: 'https://img.freepik.com/free-photo/medium-shot-waterpolo-player-with-equipment_23-2151202976.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid',
    },
  ];
  
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our facilities to our coaching programs.',
    },
    {
      title: 'Integrity',
      description: 'We believe in honesty and transparency, building trust with our community and members.',
    },
    {
      title: 'Community',
      description: 'Our community is at the heart of everything we do. We aim to create a welcoming and supportive environment for all.',
    },
    {
      title: 'Innovation',
      description: 'We embrace innovation, constantly looking for new ways to improve our services and facilities.',
    },
  ];
  
  const AboutUs = () => {
    return (
      <div>
       
  
        <section className=" py-12">
        <div className="container mx-auto px-6">
          <h2 className="font-manrope font-bold text-4xl lg:text-4xl text-black mb-4 text-center">Our Mission</h2>
          <p className="text-center text-lg mt-4 mb-8">
            We strive to provide the best sports facilities and coaching, enabling everyone to achieve their fitness goals in a supportive and inclusive environment.
          </p>
          <div className="text-center">
            <img src="https://img.freepik.com/free-photo/front-view-football-trainer-teaching-children_23-2149742028.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" alt="Our Mission" className="mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
  
      <section className="py-12 ">
        <div className="container mx-auto px-6">
          <h2 className="font-manrope font-bold text-4xl lg:text-4xl text-black mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-lg mt-4 mb-8">
            Our team is dedicated to providing the best service and experience for our members.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg border-2 border-[#CEDF9F]">
                <img src={member.image} alt={member.name} className="mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-primary text-sm mb-2 text-gray-700">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  
          <section className="px-4 md-px-0">
            <h2 className="font-manrope font-bold text-4xl lg:text-4xl text-black mb-4 text-center">
              Our <span className="text-secondary">History</span>
            </h2>
  
            <div className="flex flex-col justify-center">
              <div className="py-3 sm:max-w-3xl sm:mx-auto w-full px-2 sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                  <div className="hidden sm:block w-1 bg-[#CEDF9F] absolute h-full left-1/2 transform -translate-x-1/2"></div>
  
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div className="p-4 bg-[#CEDF9F] rounded shadow">
                          Our organization was established with a vision to create a premier sports facility for the community, aiming to provide top-notch amenities and a supportive environment for all.
                          </div>
                        </div>
                      </div>
  
                      <div className="rounded-full bg-[#CEDF9F] text-white border-[#CEDF9F] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                    </div>
                  </div>
  
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                          <div className="p-4 bg-[#CEDF9F] rounded shadow">
                          We expanded our facilities, adding state-of-the-art equipment and new sports arenas, enabling us to cater to a larger and more diverse group of sports enthusiasts.
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full bg-[#CEDF9F] border-[#CEDF9F] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                    </div>
                  </div>
  
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div className="p-4 bg-[#CEDF9F] rounded shadow">
                          Launched our community outreach program to promote fitness and healthy living, offering free workshops and sports clinics to underserved communities.
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full bg-[#CEDF9F] border-[#CEDF9F] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                    </div>
                  </div>
  
                  <div className="mt-6 sm:mt-0">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                          <div className="p-4 bg-[#CEDF9F] rounded shadow">
                          Earned national recognition for our commitment to excellence, winning several awards for our innovative programs and outstanding facilities.
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full bg-[#CEDF9F] border-[#CEDF9F] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                    </div>
                  </div>
  
                  <div className="mt-6 sm:mt-12">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div className="p-4 bg-[#CEDF9F] rounded shadow">
                          Established global partnerships with leading sports organizations, enhancing our training programs and bringing international expertise to our local community.
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full bg-[#CEDF9F] border-[#CEDF9F] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="font-manrope font-bold text-4xl lg:text-4xl text-black mb-4 text-center">Our Story</h2>
          <p className="text-center text-lg mt-4 mb-8">
            Our journey began with a simple idea: to create a space where everyone can pursue their love for sports and fitness. From humble beginnings, we've grown into a community-driven organization that supports and inspires people from all walks of life.
          </p>
          <div className="text-center">
            <img src="https://img.freepik.com/premium-photo/portrait-group-tennis-players-court-sunset_1308172-160206.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" alt="Our Story" className="mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
  
      <section className="py-12 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <p className="text-center text-lg mt-4 mb-8">
            These values define who we are and how we operate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {values.map((value, index) => (
              <div key={index} className="bg-[#CEDF9F]  p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl text-gray-800 font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  
          <section className="py-12">
            <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-4 text-center">
              Contact <span className="text-secondary">Us</span>
            </h2>
  
            <div className="container px-6 pb-12 mx-auto">
              <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <div className="text-center">
                  <span className="inline-block p-3 text-black rounded-full bg-[#CEDF9F] dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
  
                  <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">
                    Email
                  </h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Reach out to us at the following email
                  </p>
                  <p className="mt-2 text-black dark:text-blue-400 font-semibold">
                    hello@sportease.com
                  </p>
                </div>
  
                <div className="text-center">
                  <span className="inline-block p-3 text-black rounded-full bg-[#CEDF9F] dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
  
                  <h2 className="mt-4 text-lg text-gray-800 dark:text-white font-bold">
                    Office
                  </h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Come say hello at our office HQ.
                  </p>
                  <p className="mt-2 text-black dark:text-blue-400 font-semibold">
                    60 feet road, barek molla more, Mirpur 2, Dhaka
                  </p>
                </div>
  
                <div className="text-center">
                  <span className="inline-block p-3 text-black rounded-full bg-[#CEDF9F] dark:bg-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
  
                  <h2 className="mt-4 text-lg text-gray-800 dark:text-white font-bold">
                    Phone
                  </h2>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <p className="mt-2 text-black dark:text-blue-400 font-semibold">
                    +1 (555) 000-0000
                  </p>
                </div>
              </div>
            </div>
          </section>
      </div>
    );
  };
  
  export default AboutUs;
  