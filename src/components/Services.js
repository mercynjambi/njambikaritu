// import React from 'react';
// import { FaCircle, FaLaptopCode, FaShoppingCart, FaMobileAlt, FaServer, FaRegFileCode, FaGlobe, FaChartLine, FaPen, FaPaintBrush } from 'react-icons/fa'; // Importing necessary icons
// import './Services.css'; 

// const services = [
//   {
//     title: 'Web Development',
//     icon: FaLaptopCode,
//     gradient: 'linear-gradient(45deg, #4b79a1, #283e51)',
//     subServices: [
//       'Custom Websites',
//       'Progressive Web Apps',
//       'Web Applications',
//     ]
//   },
//   {
//     title: 'Mobile App Development',
//     icon: FaMobileAlt,
//     gradient: 'linear-gradient(45deg, #f4c2c2, #f08080)',
//     subServices: [
//       'Custom Apps',
//       'Cross-Platform Apps',
//       'Offline Capabilities',
//       'In-App Payments'
//     ]
//   },
//   {
//     title: 'Web Hosting & Maintenance',
//     icon: FaServer,
//     gradient: 'linear-gradient(45deg, #ff4e50, #f9d423)',
//     subServices: [
//       'Domain & Hosting Setup',
//       'Website Maintenance',
//       'Performance Optimization',
//       'SSL Certification'
//     ]
//   },
//   {
//     title: 'E-Commerce Solutions',
//     icon: FaShoppingCart,
//     gradient: 'linear-gradient(45deg, #8a2be2, #4b0082)',
//     subServices: [
//       'Online Store Development',
//       'Payment Integration',
//       'Inventory Management Systems',
//       '.....'
//     ]
//   },
 
//   {
//     title: 'UI/UX Design',
//     icon: FaPen,
//     gradient: 'linear-gradient(45deg, #ff007f, #9b59b6)',
//     subServices: [
//       'UX Research & Prototyping',
//       'Interactive Design',
//       'Accessibility Optimization',
//       'Wireframing & Mockups'
//     ]
//   },
 
//   {
//     title: 'Data Analytics & Visualization',
//     icon: FaChartLine,
//     gradient: 'linear-gradient(45deg, #00ff00, #00cc66)', 
//     subServices: [
//       'Statistical Analysis',
//       'Custom Dashboards',
//       'Machine Learning Models',
//       'Data Reporting & Insights'
//     ]
//   },
//   {
//     title: 'Payment Integration Services',
//     icon: FaGlobe,
//     gradient: 'linear-gradient(45deg, #ff4e50, #f9d423)',
//     subServices: [
//       'Lipa na Mpesa Integration',
//       'Global Payment Gateways',
//       'Subscription Billing Systems' 
//     ]
//   },
//   {
//     title: 'Digital Marketing',
//     icon: FaPaintBrush,
//     gradient: 'linear-gradient(45deg, #6dd5ed, #2193b0)', 
//     subServices: [
//       'Content Strategy',
//       'SEO Optimization',
//       'Email Marketing',
//         'Social Media Marketing',
//     ]
//   },
  
// ];

// const ServicesPage = () => {
//     return (
//       <div className="services-page">
//         <h2>Our Services</h2>
//         <p>We provide a wide range of services to help you achieve your business goals. From web design to data analysis, we've got you covered!</p>
  
//         <div className="service-cards">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <div className="service-card-header" style={{ borderColor: service.gradient }}>
//                 <div className="icon-background" style={{ background: service.gradient }}>
//                   <service.icon className="react-icon" style={{ color: 'white' }} />
//                 </div>
//                 <h3 style={{ background: service.gradient, '-webkit-background-clip': 'text', color: 'transparent' }}>
//                   {service.title}
//                 </h3>
//               </div>
//               <ul>
//                 {service.subServices.map((subService, idx) => (
//                   <li key={idx}>
//                   <div
//                     className="fa-circle-wrapper"
//                     style={{
//                         background: service.gradient,
//                         borderRadius: '50%',
//                         width: '10px',  // Adjust width and height to make it circular
//                         height: '10px', // Adjust height and width to control the icon size
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         marginRight: '10px'
//                     }}
//                   >
//                     <FaCircle style={{ color: 'transparent', fontSize: '5px' }} />
//                   </div>
//                   {subService}
//                 </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default ServicesPage;