// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'

// // Statistics data
// const statsData = [
//   {
//     number: '500+',
//     label: 'Projects Printed',
//     color: 'from-orange-400 to-pink-500',
//   },
//   {
//     number: '48h',
//     label: 'Fastest Turnaround',
//     color: 'from-blue-400 to-purple-500',
//   },
//   {
//     number: '99.9%',
//     label: 'Precision Rate',
//     color: 'from-green-400 to-blue-500',
//   },
// ]

// // Statistics section component with animated counters
// export default function Stats() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, threshold: 0.3 })

//   // Animation variants for staggered card animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   }

//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {statsData.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               variants={cardVariants}
//               className="relative"
//             >
//               {/* Decorative background circle */}
//               <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br opacity-20 rounded-full blur-xl" />
              
//               {/* Main card */}
//               <div className="card relative bg-white/80 backdrop-blur-sm border border-gray-100">
//                 <div className="text-center">
//                   {/* Number with gradient text */}
//                   <motion.div
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
//                     className="text-4xl md:text-5xl font-bold mb-2"
//                   >
//                     <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
//                       {stat.number}
//                     </span>
//                   </motion.div>
                  
//                   {/* Label */}
//                   <p className="text-gray-600 font-medium text-lg">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

