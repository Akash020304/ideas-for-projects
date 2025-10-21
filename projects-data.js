const projectsData = {
    // Computer Engineering Projects
    computer: [
        {
            id: 101,
            title: "Smart Home Automation System",
            description: "IoT-based home automation project using Raspberry Pi and mobile app",
            difficulty: "Beginner",
            duration: "2-3 months",
            overview: "This project aims to create a comprehensive home automation system that allows users to control various home appliances and monitor environmental conditions through a mobile application. The system uses IoT technology to connect devices and provide real-time control and monitoring capabilities.",
            steps: [
                "Week 1-2: Planning and Research - Research existing solutions, define project scope, and create system architecture",
                "Week 3-4: Hardware Setup - Set up Raspberry Pi, connect sensors and actuators, and test basic functionality",
                "Week 5-6: Software Development - Develop server application and mobile app interface",
                "Week 7-8: Integration and Testing - Integrate all components and perform comprehensive testing"
            ],
            requirements: [
                "Raspberry Pi 4 Model B",
                "Temperature and Humidity Sensor (DHT22)",
                "Relay Module",
                "WiFi Module",
                "Power Supply",
                "Mobile Device (Android/iOS)"
            ],
            outcomes: [
                "Understanding of IoT architecture and protocols",
                "Experience with sensor integration and data collection",
                "Mobile app development skills",
                "Network security implementation"
            ],
            resources: [
                {
                    title: "Raspberry Pi Documentation",
                    link: "https://www.raspberrypi.org/documentation/",
                    description: "Official documentation for Raspberry Pi setup and programming"
                },
                {
                    title: "IoT Protocols Guide",
                    link: "https://www.iotforall.com/iot-protocols",
                    description: "Comprehensive guide to IoT communication protocols"
                }
            ],
            tips: [
                "Start with basic sensor integration before moving to complex features",
                "Use a modular approach for better code organization",
                "Implement proper error handling and logging",
                "Test each component thoroughly before integration"
            ]
        },
        {
            id: 102,
            title: "AI-Powered Chatbot",
            description: "Natural language processing chatbot using Python and machine learning",
            difficulty: "Intermediate",
            duration: "1-2 months",
            overview: "Develop an intelligent chatbot that can understand and respond to user queries using natural language processing and machine learning techniques. The chatbot will be trained on specific domain knowledge and can handle various types of user interactions.",
            steps: [
                "Week 1: Research and Planning - Study NLP concepts and choose appropriate ML models",
                "Week 2-3: Data Collection and Preprocessing - Gather training data and prepare it for model training",
                "Week 4-5: Model Development - Implement and train the chatbot model",
                "Week 6-7: Integration and Testing - Create user interface and test the chatbot"
            ],
            requirements: [
                "Python 3.7+",
                "TensorFlow or PyTorch",
                "Natural Language Toolkit (NLTK)",
                "Training dataset",
                "Web framework (Flask/Django)"
            ],
            outcomes: [
                "Understanding of NLP concepts and techniques",
                "Experience with machine learning model development",
                "Knowledge of chatbot architecture",
                "Data preprocessing and cleaning skills"
            ],
            resources: [
                {
                    title: "NLTK Documentation",
                    link: "https://www.nltk.org/",
                    description: "Natural Language Toolkit documentation and tutorials"
                },
                {
                    title: "TensorFlow Tutorials",
                    link: "https://www.tensorflow.org/tutorials",
                    description: "Official TensorFlow tutorials and guides"
                }
            ],
            tips: [
                "Start with a simple rule-based system before implementing ML",
                "Use pre-trained models for better initial results",
                "Implement proper error handling for unexpected inputs",
                "Regularly update the training data for better performance"
            ]
        },
        {
            id: 103,
            title: "Blockchain Voting System",
            description: "Secure and transparent voting system using blockchain technology",
            difficulty: "Advanced",
            duration: "3-4 months",
            overview: "Create a decentralized voting system that ensures security, transparency, and immutability using blockchain technology. The system will allow users to cast votes securely while maintaining anonymity and preventing fraud.",
            steps: [
                "Week 1-2: Research and Planning - Study blockchain concepts and design system architecture",
                "Week 3-4: Smart Contract Development - Implement voting logic using Solidity",
                "Week 5-6: Frontend Development - Create user interface for voting",
                "Week 7-8: Security Implementation - Add encryption and security features",
                "Week 9-10: Testing and Deployment - Test the system and deploy on testnet"
            ],
            requirements: [
                "Ethereum development environment",
                "Solidity programming knowledge",
                "Web3.js or ethers.js",
                "React or Angular for frontend",
                "Metamask or similar wallet"
            ],
            outcomes: [
                "Understanding of blockchain technology",
                "Smart contract development skills",
                "Security implementation knowledge",
                "Decentralized application development experience"
            ],
            resources: [
                {
                    title: "Solidity Documentation",
                    link: "https://docs.soliditylang.org/",
                    description: "Official Solidity programming language documentation"
                },
                {
                    title: "Ethereum Development Guide",
                    link: "https://ethereum.org/en/developers/docs/",
                    description: "Comprehensive guide to Ethereum development"
                }
            ],
            tips: [
                "Start with a simple voting mechanism before adding complex features",
                "Implement proper security measures from the beginning",
                "Use testnet for development and testing",
                "Regularly audit the smart contract code"
            ]
        }
    ],
    // Electrical Engineering Projects
    electrical: [
        {
            id: 201,
            title: "Solar Power Monitoring System",
            description: "Real-time monitoring system for solar panel performance",
            difficulty: "Beginner",
            duration: "2-3 months",
            overview: "Design and implement a system to monitor solar panel performance, including power output, efficiency, and environmental conditions. The system will provide real-time data and analytics for optimizing solar energy generation.",
            steps: [
                "Week 1-2: Research and Planning - Study solar panel monitoring requirements",
                "Week 3-4: Hardware Setup - Install sensors and data acquisition system",
                "Week 5-6: Software Development - Create monitoring interface and data processing",
                "Week 7-8: Testing and Optimization - Test system and implement improvements"
            ],
            requirements: [
                "Current and voltage sensors",
                "Temperature sensors",
                "Data acquisition board",
                "Microcontroller (Arduino/Raspberry Pi)",
                "Display unit"
            ],
            outcomes: [
                "Understanding of solar power systems",
                "Experience with sensor integration",
                "Data acquisition and processing skills",
                "System monitoring and analysis capabilities"
            ],
            resources: [
                {
                    title: "Solar Panel Monitoring Guide",
                    link: "#",
                    description: "Comprehensive guide to solar panel monitoring systems"
                }
            ],
            tips: [
                "Calibrate sensors regularly",
                "Implement proper data logging",
                "Use appropriate safety measures",
                "Consider weather conditions in design"
            ]
        },
        {
            id: 202,
            title: "Smart Energy Meter",
            description: "IoT-based energy consumption monitoring system",
            difficulty: "Intermediate",
            duration: "3-4 months",
            overview: "Develop an intelligent energy meter that provides real-time monitoring of power consumption, cost analysis, and energy-saving recommendations. The system will include IoT connectivity for remote monitoring and control.",
            steps: [
                "Week 1-2: Research and Planning - Study energy monitoring requirements",
                "Week 3-4: Hardware Development - Design and build metering circuit",
                "Week 5-6: Software Development - Create monitoring interface",
                "Week 7-8: IoT Integration - Implement remote monitoring features",
                "Week 9-10: Testing and Optimization - Test system and implement improvements"
            ],
            requirements: [
                "Current transformer",
                "Voltage sensor",
                "Microcontroller with WiFi",
                "Display unit",
                "Cloud platform for data storage"
            ],
            outcomes: [
                "Understanding of power measurement techniques",
                "IoT implementation skills",
                "Data analysis capabilities",
                "Energy efficiency knowledge"
            ],
            resources: [
                {
                    title: "Energy Meter Design Guide",
                    link: "#",
                    description: "Guide to designing smart energy meters"
                }
            ],
            tips: [
                "Ensure accurate calibration",
                "Implement proper safety measures",
                "Use reliable IoT connectivity",
                "Consider power factor in measurements"
            ]
        }
    ],
    // Mechanical Engineering Projects
    mechanical: [
        {
            id: 301,
            title: "3D Printed Robotic Arm",
            description: "Custom robotic arm using 3D printing and servo motors",
            difficulty: "Beginner",
            duration: "2-3 months",
            overview: "Design and build a robotic arm using 3D printed components and servo motors. The arm will be capable of performing basic pick-and-place operations and can be controlled through a user interface.",
            steps: [
                "Week 1-2: Design and Planning - Create 3D models and select components",
                "Week 3-4: 3D Printing - Print and assemble mechanical components",
                "Week 5-6: Electronics Integration - Install motors and control system",
                "Week 7-8: Programming and Testing - Develop control software and test functionality"
            ],
            requirements: [
                "3D printer",
                "Servo motors",
                "Microcontroller (Arduino)",
                "Power supply",
                "Control interface"
            ],
            outcomes: [
                "3D modeling and printing skills",
                "Mechanical design knowledge",
                "Control system implementation",
                "Robotics fundamentals"
            ],
            resources: [
                {
                    title: "Robotic Arm Design Guide",
                    link: "#",
                    description: "Comprehensive guide to robotic arm design"
                }
            ],
            tips: [
                "Start with simple designs",
                "Use appropriate materials",
                "Implement proper safety measures",
                "Test each joint separately"
            ]
        }
    ],
    // Civil Engineering Projects
    civil: [
        {
            id: 401,
            title: "Earthquake Resistant Building Design",
            description: "Structural design for earthquake-resistant buildings",
            difficulty: "Beginner",
            duration: "2-3 months",
            overview: "Design and analyze a building structure that can withstand seismic forces. The project includes structural analysis, material selection, and implementation of earthquake-resistant design principles.",
            steps: [
                "Week 1-2: Research and Planning - Study earthquake-resistant design principles",
                "Week 3-4: Structural Design - Create building design and calculations",
                "Week 5-6: Material Selection - Choose appropriate materials and components",
                "Week 7-8: Analysis and Testing - Perform structural analysis and simulations"
            ],
            requirements: [
                "Structural analysis software",
                "Building design tools",
                "Material testing equipment",
                "Simulation software"
            ],
            outcomes: [
                "Understanding of seismic design principles",
                "Structural analysis skills",
                "Material selection knowledge",
                "Building design experience"
            ],
            resources: [
                {
                    title: "Seismic Design Guide",
                    link: "#",
                    description: "Guide to earthquake-resistant building design"
                }
            ],
            tips: [
                "Follow local building codes",
                "Consider different seismic zones",
                "Use appropriate safety factors",
                "Implement redundancy in design"
            ]
        }
    ]
};

// Function to get project data by ID
function getProjectById(id) {
    for (const branch in projectsData) {
        const project = projectsData[branch].find(p => p.id === parseInt(id));
        if (project) {
            return project;
        }
    }
    return null;
} 