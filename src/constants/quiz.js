const quiz = [
    {
        theme: "Fish Classification",
        questions: [
      {
        question: "What class of fish is characterized by having a skeleton made of cartilage rather than bone?",
        options: [
          { option: "A) Chondrichthyes", correct: true },
          { option: "B) Actinopterygii", correct: false },
          { option: "C) Sarcopterygii", correct: false },
          { option: "D) Agnatha", correct: false },
        ],
        allOptions: [
            { option: "A) Chondrichthyes", correct: true },
            { option: "B) Actinopterygii", correct: false },
            { option: "C) Sarcopterygii", correct: false },
            { option: "D) Agnatha", correct: false },
            { option: "E) Osteichthyes", correct: false },
            { option: "F) Myxini", correct: false },
        ]
      },
      {
        question: "Which of the following fish is a member of the class Actinopterygii?",
        options: [
          { option: "A) Shark", correct: false },
          { option: "B) Ray", correct: false },
          { option: "C) Salmon", correct: true },
          { option: "D) Lamprey", correct: false },
        ],
        allOptions: [
            { option: "A) Shark", correct: false },
            { option: "B) Ray", correct: false },
            { option: "C) Salmon", correct: true },
            { option: "D) Lamprey", correct: false },
            { option: "E) Hagfish", correct: false },
            { option: "F) Coelacanth", correct: false },
        ]
      },
      {
        question: "Which fish is commonly known as a jawless fish?",
        options: [
          { option: "A) Tuna", correct: false },
          { option: "B) Hagfish", correct: true },
          { option: "C) Clownfish", correct: false },
          { option: "D) Salmon", correct: false },
        ],
        allOptions: [
            { option: "A) Tuna", correct: false },
            { option: "B) Hagfish", correct: true },
            { option: "C) Clownfish", correct: false },
            { option: "D) Salmon", correct: false },
            { option: "E) Catfish", correct: false },
            { option: "F) Swordfish", correct: false },
        ]
      },
      {
        question: "Which fish belongs to the class Sarcopterygii?",
        options: [
          { option: "A) Coelacanth", correct: true },
          { option: "B) Bluefin Tuna", correct: false },
          { option: "C) Swordfish", correct: false },
          { option: "D) Clownfish", correct: false },
        ],
        allOptions: [
            { option: "A) Coelacanth", correct: true },
            { option: "B) Bluefin Tuna", correct: false },
            { option: "C) Swordfish", correct: false },
            { option: "D) Clownfish", correct: false },
            { option: "E) Catfish", correct: false },
            { option: "F) Haddock", correct: false },
        ]
      },
      {
        question: "Which class of fish includes the majority of modern fish species?",
        options: [
          { option: "A) Chondrichthyes", correct: false },
          { option: "B) Sarcopterygii", correct: false },
          { option: "C) Agnatha", correct: false },
          { option: "D) Actinopterygii", correct: true },
        ],
        allOptions: [
            { option: "A) Chondrichthyes", correct: false },
            { option: "B) Sarcopterygii", correct: false },
            { option: "C) Agnatha", correct: false },
            { option: "D) Actinopterygii", correct: true },
            { option: "E) Myxini", correct: false },
            { option: "F) Petromyzontidae", correct: false },
        ]
      },
      {
        question: "Which type of fish is known for having both a bony skeleton and lobed pectoral fins?",
        options: [
          { option: "A) Lungfish", correct: true },
          { option: "B) Ray-finned fish", correct: false },
          { option: "C) Cartilaginous fish", correct: false },
          { option: "D) Hagfish", correct: false },
        ],
        allOptions: [
            { option: "A) Lungfish", correct: true },
            { option: "B) Ray-finned fish", correct: false },
            { option: "C) Cartilaginous fish", correct: false },
            { option: "D) Hagfish", correct: false },
            { option: "E) Eel", correct: false },
            { option: "F) Salmon", correct: false },
        ]
      },
      {
        question: "Which fish class includes species like sharks and rays?",
        options: [
          { option: "A) Chondrichthyes", correct: true },
          { option: "B) Actinopterygii", correct: false },
          { option: "C) Sarcopterygii", correct: false },
          { option: "D) Agnatha", correct: false },
        ],
        allOptions: [
            { option: "A) Chondrichthyes", correct: true },
            { option: "B) Actinopterygii", correct: false },
            { option: "C) Sarcopterygii", correct: false },
            { option: "D) Agnatha", correct: false },
            { option: "E) Myxini", correct: true },
            { option: "F) Petromyzontidae", correct: false },
        ]
      },
      {
        question: "Which class of fish is known for its fossil record that dates back to the Devonian period?",
        options: [
          { option: "B) Actinopterygii", correct: false },
          { option: "A) Sarcopterygii", correct: true },
          { option: "C) Chondrichthyes", correct: false },
          { option: "D) Agnatha", correct: false },
        ],
        allOptions: [
            { option: "A) Actinopterygii", correct: false },
            { option: "B) Sarcopterygii", correct: true },
            { option: "C) Chondrichthyes", correct: false },
            { option: "D) Agnatha", correct: false },
            { option: "E) Myxini", correct: false },
            { option: "F) Petromyzontidae", correct: false },
        ]
      },
      {
        question: "Which fish is known for its distinctive armored plates and was prevalent during the Paleozoic era?",
        options: [
          { option: "B) Shark", correct: false },
          { option: "C) Tuna", correct: false },
          { option: "D) Clownfish", correct: false },
          { option: "A) Placoderm", correct: true },
        ],
        allOptions: [
            { option: "A) Shark", correct: false },
            { option: "B) Tuna", correct: false },
            { option: "C) Clownfish", correct: false },
            { option: "D) Catfish", correct: false },
            { option: "E) Placoderm", correct: true },
            { option: "F) Salmon", correct: false },
        ]
      },
      {
        question: "Which type of fish is characterized by having a cartilaginous skeleton and no swim bladder?",
        options: [
          { option: "A) Tuna", correct: false },
          { option: "B) Salmon", correct: false },
          { option: "C) Shark", correct: true },
          { option: "D) Clownfish", correct: false },
        ],
        allOptions: [
            { option: "A) Tuna", correct: false },
            { option: "B) Salmon", correct: false },
            { option: "C) Shark", correct: true },
            { option: "D) Clownfish", correct: false },
            { option: "E) Catfish", correct: true },
            { option: "F) Swordfish", correct: false },
        ]
      }
        ],
    },
    {
        theme: "Fish Habitats",
        questions: [
          {
            question: "Which fish is commonly found in tropical coral reefs?",
            options: [
              { option: "A) Clownfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Catfish", correct: false },
            ],
            allOptions: [
              { option: "A) Clownfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Catfish", correct: false },
              { option: "E) Haddock", correct: false },
              { option: "F) Eel", correct: false },
            ]
          },
          {
            question: "Which fish is adapted to live in deep-sea environments with high pressure and low light?",
            options: [
              { option: "A) Lanternfish", correct: true },
              { option: "B) Salmon", correct: false },
              { option: "C) Tuna", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Lanternfish", correct: true },
              { option: "B) Salmon", correct: false },
              { option: "C) Tuna", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Trout", correct: false },
            ]
          },
          {
            question: "Which fish species is known for migrating between freshwater rivers and the ocean?",
            options: [
              { option: "A) Clownfish", correct: false },
              { option: "B) Tuna", correct: false },
              { option: "C) Catfish", correct: false },
              { option: "D) Salmon", correct: true },
            ],
            allOptions: [
              { option: "A) Clownfish", correct: false },
              { option: "B) Tuna", correct: false },
              { option: "C) Catfish", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Pike", correct: false },
              { option: "F) Salmon", correct: true },
            ]
          },
          {
            question: "Which fish is commonly found in estuaries and brackish waters where fresh and saltwater mix?",
            options: [
              { option: "A) Bull Shark", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Bull Shark", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Haddock", correct: false },
              { option: "F) Eel", correct: false },
            ]
          },
          {
            question: "Which fish species is known for its ability to adapt to a wide range of environments, including urban ponds and rivers?",
            options: [
              { option: "A) Carp", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Carp", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Pike", correct: false },
              { option: "F) Goldfish", correct: false },
            ]
          },
          {
            question: "Which fish species is often found in the open ocean and is known for its high-speed swimming abilities?",
            options: [
              { option: "A) Tuna", correct: true },
              { option: "B) Clownfish", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Catfish", correct: false },
            ],
            allOptions: [
              { option: "A) Tuna", correct: true },
              { option: "B) Clownfish", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Catfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Pike", correct: false },
            ]
          },
          {
            question: "Which fish is adapted to live in high-altitude freshwater lakes and rivers?",
            options: [
              { option: "A) Arctic Char", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Arctic Char", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Carp", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          },
          {
            question: "Which fish species is often found in kelp forests and is known for its camouflage abilities?",
            options: [
              { option: "A) Kelp Bass", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Kelp Bass", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Pike", correct: false },
            ]
          },
          {
            question: "Which fish is known for its ability to live in both freshwater and saltwater environments, often found in coastal regions?",
            options: [
              { option: "A) Bull Shark", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Bull Shark", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Pike", correct: false },
            ]
          },
          {
            question: "Which fish species is known for its deep-sea habitat and bioluminescent organs that attract prey?",
            options: [
              { option: "A) Anglerfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Anglerfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Carp", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          }
        ]
      },
      {
        theme: "Fish Anatomy",
        questions: [
          {
            question: "What is the primary function of a fish's gills?",
            options: [
              { option: "A) To extract oxygen from water", correct: true },
              { option: "B) To aid in buoyancy", correct: false },
              { option: "C) To filter food particles", correct: false },
              { option: "D) To protect the fish's body", correct: false },
            ],
            allOptions: [
              { option: "A) To extract oxygen from water", correct: true },
              { option: "B) To aid in buoyancy", correct: false },
              { option: "C) To filter food particles", correct: false },
              { option: "D) To protect the fish's body", correct: false },
              { option: "E) To help with locomotion", correct: false },
              { option: "F) To store energy", correct: false },
            ]
          },
          {
            question: "What is the purpose of a fish's swim bladder?",
            options: [
              { option: "A) To regulate buoyancy", correct: true },
              { option: "B) To aid in digestion", correct: false },
              { option: "C) To assist in respiration", correct: false },
              { option: "D) To protect against predators", correct: false },
            ],
            allOptions: [
              { option: "A) To regulate buoyancy", correct: true },
              { option: "B) To aid in digestion", correct: false },
              { option: "C) To assist in respiration", correct: false },
              { option: "D) To protect against predators", correct: false },
              { option: "E) To filter waste", correct: false },
              { option: "F) To store energy", correct: false },
            ]
          },
          {
            question: "Which structure in fish helps them to sense vibrations and movements in the water?",
            options: [
              { option: "A) Lateral line", correct: true },
              { option: "B) Swim bladder", correct: false },
              { option: "C) Gills", correct: false },
              { option: "D) Fins", correct: false },
            ],
            allOptions: [
              { option: "A) Lateral line", correct: true },
              { option: "B) Swim bladder", correct: false },
              { option: "C) Gills", correct: false },
              { option: "D) Fins", correct: false },
              { option: "E) Scales", correct: false },
              { option: "F) Eyes", correct: false },
            ]
          },
          {
            question: "Which type of fin is primarily used for stability and steering in fish?",
            options: [
              { option: "A) Dorsal fin", correct: true },
              { option: "B) Pectoral fin", correct: false },
              { option: "C) Pelvic fin", correct: false },
              { option: "D) Anal fin", correct: false },
            ],
            allOptions: [
              { option: "A) Dorsal fin", correct: true },
              { option: "B) Pectoral fin", correct: false },
              { option: "C) Pelvic fin", correct: false },
              { option: "D) Anal fin", correct: false },
              { option: "E) Caudal fin", correct: false },
              { option: "F) Adipose fin", correct: false },
            ]
          },
          {
            question: "Which part of a fish's body provides protection and reduces drag while swimming?",
            options: [
              { option: "A) Scales", correct: true },
              { option: "B) Fins", correct: false },
              { option: "C) Swim bladder", correct: false },
              { option: "D) Gills", correct: false },
            ],
            allOptions: [
              { option: "A) Scales", correct: true },
              { option: "B) Fins", correct: false },
              { option: "C) Swim bladder", correct: false },
              { option: "D) Gills", correct: false },
              { option: "E) Lateral line", correct: false },
              { option: "F) Jaw", correct: false },
            ]
          },
          {
            question: "Which fin is located on the underside of a fish and helps with balance?",
            options: [
              { option: "A) Pelvic fin", correct: true },
              { option: "B) Pectoral fin", correct: false },
              { option: "C) Dorsal fin", correct: false },
              { option: "D) Anal fin", correct: false },
            ],
            allOptions: [
              { option: "A) Pelvic fin", correct: true },
              { option: "B) Pectoral fin", correct: false },
              { option: "C) Dorsal fin", correct: false },
              { option: "D) Anal fin", correct: false },
              { option: "E) Caudal fin", correct: false },
              { option: "F) Adipose fin", correct: false },
            ]
          },
          {
            question: "What is the term for the organ in fish that helps to regulate their buoyancy by controlling the amount of gas in the swim bladder?",
            options: [
              { option: "A) Gas bladder", correct: true },
              { option: "B) Heart", correct: false },
              { option: "C) Liver", correct: false },
              { option: "D) Kidney", correct: false },
            ],
            allOptions: [
              { option: "A) Gas bladder", correct: true },
              { option: "B) Heart", correct: false },
              { option: "C) Liver", correct: false },
              { option: "D) Kidney", correct: false },
              { option: "E) Stomach", correct: false },
              { option: "F) Gills", correct: false },
            ]
          },
          {
            question: "Which feature of fish helps them to detect changes in their surroundings and respond to environmental stimuli?",
            options: [
              { option: "A) Sensory organs", correct: true },
              { option: "B) Swim bladder", correct: false },
              { option: "C) Scales", correct: false },
              { option: "D) Fins", correct: false },
            ],
            allOptions: [
              { option: "A) Sensory organs", correct: true },
              { option: "B) Swim bladder", correct: false },
              { option: "C) Scales", correct: false },
              { option: "D) Fins", correct: false },
              { option: "E) Lateral line", correct: false },
              { option: "F) Teeth", correct: false },
            ]
          },
          {
            question: "Which part of the fish's anatomy is responsible for excreting waste products from the body?",
            options: [
              { option: "A) Kidney", correct: true },
              { option: "B) Swim bladder", correct: false },
              { option: "C) Liver", correct: false },
              { option: "D) Heart", correct: false },
            ],
            allOptions: [
              { option: "A) Kidney", correct: true },
              { option: "B) Swim bladder", correct: false },
              { option: "C) Liver", correct: false },
              { option: "D) Heart", correct: false },
              { option: "E) Stomach", correct: false },
              { option: "F) Gills", correct: false },
            ]
          },
          {
            question: "Which fin is often referred to as the tail fin and is used for propulsion?",
            options: [
              { option: "A) Caudal fin", correct: true },
              { option: "B) Dorsal fin", correct: false },
              { option: "C) Pectoral fin", correct: false },
              { option: "D) Pelvic fin", correct: false },
            ],
            allOptions: [
              { option: "A) Caudal fin", correct: true },
              { option: "B) Dorsal fin", correct: false },
              { option: "C) Pectoral fin", correct: false },
              { option: "D) Pelvic fin", correct: false },
              { option: "E) Anal fin", correct: false },
              { option: "F) Adipose fin", correct: false },
            ]
          },
        ]
      },
      {
        theme: "Fish Feeding Habits",
        questions: [
          {
            question: "Which fish is known for its ability to filter feed by straining plankton from the water?",
            options: [
              { option: "A) Whale Shark", correct: true },
              { option: "B) Great White Shark", correct: false },
              { option: "C) Tuna", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Whale Shark", correct: true },
              { option: "B) Great White Shark", correct: false },
              { option: "C) Tuna", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Salmon", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          },
          {
            question: "Which fish uses a specialized method of hunting where it spits water to knock prey off leaves or branches?",
            options: [
              { option: "A) Archerfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Archerfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Goldfish", correct: false },
            ]
          },
          {
            question: "Which type of fish is a predator known for its sharp teeth and aggressive hunting behavior?",
            options: [
              { option: "A) Great White Shark", correct: true },
              { option: "B) Salmon", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Catfish", correct: false },
            ],
            allOptions: [
              { option: "A) Great White Shark", correct: true },
              { option: "B) Salmon", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Catfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish is known for scavenging on the ocean floor, consuming detritus and small organisms?",
            options: [
              { option: "A) Catfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Catfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Swordfish", correct: false },
            ]
          },
          {
            question: "Which fish uses its large mouth to suck in prey, often found in coral reefs?",
            options: [
              { option: "A) Grouper", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Grouper", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish is known for hunting in schools and using teamwork to catch prey?",
            options: [
              { option: "A) Tuna", correct: true },
              { option: "B) Salmon", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Catfish", correct: false },
            ],
            allOptions: [
              { option: "A) Tuna", correct: true },
              { option: "B) Salmon", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Catfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Pike", correct: false },
            ]
          },
          {
            question: "Which fish is a known herbivore, feeding primarily on algae and aquatic plants?",
            options: [
              { option: "A) Parrotfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Parrotfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish is known for its ability to use camouflage to ambush its prey?",
            options: [
              { option: "A) Stonefish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Stonefish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish uses a specialized structure to detect electrical signals from prey?",
            options: [
              { option: "A) Electric Eel", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Electric Eel", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          },
          {
            question: "Which fish is known for its long migrations from breeding grounds to feeding grounds in the open ocean?",
            options: [
              { option: "A) Tuna", correct: true },
              { option: "B) Salmon", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Catfish", correct: false },
            ],
            allOptions: [
              { option: "A) Tuna", correct: true },
              { option: "B) Salmon", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Catfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
        ]
      },
      {
        theme: "Fish Reproduction",
        questions: [
          {
            question: "Which fish is known for its ability to lay thousands of eggs in a single spawning event?",
            options: [
              { option: "A) Salmon", correct: true },
              { option: "B) Clownfish", correct: false },
              { option: "C) Tuna", correct: false },
              { option: "D) Catfish", correct: false },
            ],
            allOptions: [
              { option: "A) Salmon", correct: true },
              { option: "B) Clownfish", correct: false },
              { option: "C) Tuna", correct: false },
              { option: "D) Catfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish exhibits parental care by guarding and aerating the eggs and fry?",
            options: [
              { option: "A) Cichlid", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Cichlid", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish species is known for its complex courtship rituals, including elaborate dances and color displays?",
            options: [
              { option: "A) Clownfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Catfish", correct: false },
            ],
            allOptions: [
              { option: "A) Clownfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Catfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish is known for undergoing a dramatic transformation from larval stage to adult stage?",
            options: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Goldfish", correct: false },
            ],
            allOptions: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Carp", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          },
          {
            question: "Which fish species has a reproductive strategy known as 'egg scattering,' where eggs are dispersed in the environment?",
            options: [
              { option: "A) Carp", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Carp", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          },
          {
            question: "Which fish has a unique reproductive method where it changes sex during its lifetime?",
            options: [
              { option: "A) Clownfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
            ],
            allOptions: [
              { option: "A) Clownfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Carp", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          },
          {
            question: "Which fish exhibits mouthbrooding behavior, where eggs are carried in the mouth for protection?",
            options: [
              { option: "A) Mouthbrooder Cichlid", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Mouthbrooder Cichlid", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          },
          {
            question: "Which fish migrates to freshwater rivers to spawn and then returns to the ocean as an adult?",
            options: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Catfish", correct: false },
            ],
            allOptions: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Catfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish species demonstrates parental care by building nests and protecting the eggs until they hatch?",
            options: [
              { option: "A) Stickleback", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Stickleback", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish lays eggs that are fertilized externally in the water?",
            options: [
              { option: "A) Tuna", correct: true },
              { option: "B) Clownfish", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
            ],
            allOptions: [
              { option: "A) Tuna", correct: true },
              { option: "B) Clownfish", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Carp", correct: false },
              { option: "F) Catfish", correct: false },
            ]
          },
        ]
      },
      {
        theme: "Fish Adaptations",
        questions: [
          {
            question: "Which fish has the ability to change color to blend into its surroundings?",
            options: [
              { option: "A) Chameleon Fish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Chameleon Fish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish has specialized adaptations for living in low-oxygen environments, such as the ability to gulp air?",
            options: [
              { option: "A) Lungfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Lungfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish species is known for its bioluminescent abilities used for attracting prey or mates?",
            options: [
              { option: "A) Lanternfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Lanternfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish has evolved a sucker-like disc on its head to attach to other fish or objects?",
            options: [
              { option: "A) Remora", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Remora", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish species is known for its ability to produce electric fields to navigate and hunt?",
            options: [
              { option: "A) Electric Eel", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Electric Eel", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish uses its large, strong pectoral fins to 'walk' along the ocean floor?",
            options: [
              { option: "A) Walking Fish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Walking Fish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish has developed a specialized body shape to help it maneuver easily in narrow crevices and coral reefs?",
            options: [
              { option: "A) Parrotfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Parrotfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish has evolved the ability to inflate its body as a defense mechanism?",
            options: [
              { option: "A) Puffer Fish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Puffer Fish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish species is known for its ability to produce a protective mucus coating on its body?",
            options: [
              { option: "A) Eel", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Eel", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
          {
            question: "Which fish has specialized spines or toxins to defend itself from predators?",
            options: [
              { option: "A) Stonefish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
            ],
            allOptions: [
              { option: "A) Stonefish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false },
            ]
          },
        ]
      },
      {
        theme: "Fish Conservation",
        questions: [
          {
            question: "Which of the following practices is essential for sustainable fishery management?",
            options: [
              { option: "A) Quota Systems", correct: true },
              { option: "B) Overfishing", correct: false },
              { option: "C) Habitat Destruction", correct: false },
              { option: "D) Illegal Fishing", correct: false }
            ],
            allOptions: [
              { option: "A) Quota Systems", correct: true },
              { option: "B) Overfishing", correct: false },
              { option: "C) Habitat Destruction", correct: false },
              { option: "D) Illegal Fishing", correct: false },
              { option: "E) Pollution", correct: false },
              { option: "F) Bycatch", correct: false }
            ]
          },
          {
            question: "What is a major threat to fish populations due to its impact on aquatic habitats?",
            options: [
              { option: "A) Habitat Destruction", correct: true },
              { option: "B) Sustainable Fishing", correct: false },
              { option: "C) Conservation Efforts", correct: false },
              { option: "D) Pollution Control", correct: false }
            ],
            allOptions: [
              { option: "A) Habitat Destruction", correct: true },
              { option: "B) Sustainable Fishing", correct: false },
              { option: "C) Conservation Efforts", correct: false },
              { option: "D) Pollution Control", correct: false },
              { option: "E) Aquaculture", correct: false },
              { option: "F) Marine Reserves", correct: false }
            ]
          },
          {
            question: "Which international agreement aims to regulate and manage the global fishing industry to prevent overexploitation?",
            options: [
              { option: "A) United Nations Fish Stocks Agreement", correct: true },
              { option: "B) Paris Agreement", correct: false },
              { option: "C) CITES", correct: false },
              { option: "D) Ramsar Convention", correct: false }
            ],
            allOptions: [
              { option: "A) United Nations Fish Stocks Agreement", correct: true },
              { option: "B) Paris Agreement", correct: false },
              { option: "C) CITES", correct: false },
              { option: "D) Ramsar Convention", correct: false },
              { option: "E) Kyoto Protocol", correct: false },
              { option: "F) Montreal Protocol", correct: false }
            ]
          },
          {
            question: "What practice involves farming fish under controlled conditions to reduce pressure on wild populations?",
            options: [
              { option: "A) Aquaculture", correct: true },
              { option: "B) Commercial Fishing", correct: false },
              { option: "C) Recreational Fishing", correct: false },
              { option: "D) Bycatch Reduction", correct: false }
            ],
            allOptions: [
              { option: "A) Aquaculture", correct: true },
              { option: "B) Commercial Fishing", correct: false },
              { option: "C) Recreational Fishing", correct: false },
              { option: "D) Bycatch Reduction", correct: false },
              { option: "E) Marine Protected Areas", correct: false },
              { option: "F) Illegal Fishing", correct: false }
            ]
          },
          {
            question: "Which type of fishing gear is particularly problematic due to its high rates of bycatch?",
            options: [
              { option: "A) Drift Nets", correct: true },
              { option: "B) Hook and Line", correct: false },
              { option: "C) Traps", correct: false },
              { option: "D) Long Lines", correct: false }
            ],
            allOptions: [
              { option: "A) Drift Nets", correct: true },
              { option: "B) Hook and Line", correct: false },
              { option: "C) Traps", correct: false },
              { option: "D) Long Lines", correct: false },
              { option: "E) Travels", correct: false },
              { option: "F) Pots", correct: false }
            ]
          },
          {
            question: "What term describes the unintended capture of non-target species during fishing?",
            options: [
              { option: "A) Bycatch", correct: true },
              { option: "B) Overfishing", correct: false },
              { option: "C) Habitat Destruction", correct: false },
              { option: "D) Aquaculture", correct: false }
            ],
            allOptions: [
              { option: "A) Bycatch", correct: true },
              { option: "B) Overfishing", correct: false },
              { option: "C) Habitat Destruction", correct: false },
              { option: "D) Aquaculture", correct: false },
              { option: "E) Illegal Fishing", correct: false },
              { option: "F) Pollution", correct: false }
            ]
          },
          {
            question: "Which of the following is a key measure to protect fish populations and their habitats in marine environments?",
            options: [
              { option: "A) Marine Protected Areas", correct: true },
              { option: "B) Overfishing", correct: false },
              { option: "C) Habitat Destruction", correct: false },
              { option: "D) Pollution", correct: false }
            ],
            allOptions: [
              { option: "A) Marine Protected Areas", correct: true },
              { option: "B) Overfishing", correct: false },
              { option: "C) Habitat Destruction", correct: false },
              { option: "D) Pollution", correct: false },
              { option: "E) Bycatch", correct: false },
              { option: "F) Illegal Fishing", correct: false }
            ]
          },
          {
            question: "Which organization is known for its efforts in promoting sustainable seafood and fisheries?",
            options: [
              { option: "A) Marine Stewardship Council (MSC)", correct: true },
              { option: "B) World Health Organization (WHO)", correct: false },
              { option: "C) International Monetary Fund (IMF)", correct: false },
              { option: "D) Greenpeace", correct: false }
            ],
            allOptions: [
              { option: "A) Marine Stewardship Council (MSC)", correct: true },
              { option: "B) World Health Organization (WHO)", correct: false },
              { option: "C) International Monetary Fund (IMF)", correct: false },
              { option: "D) Greenpeace", correct: false },
              { option: "E) World Wildlife Fund (WWF)", correct: false },
              { option: "F) International Union for Conservation of Nature (IUCN)", correct: false }
            ]
          },
          {
            question: "What is the process of restoring degraded fish habitats to improve ecological health and fish populations?",
            options: [
              { option: "A) Habitat Restoration", correct: true },
              { option: "B) Overfishing", correct: false },
              { option: "C) Pollution Control", correct: false },
              { option: "D) Sustainable Fishing", correct: false }
            ],
            allOptions: [
              { option: "A) Habitat Restoration", correct: true },
              { option: "B) Overfishing", correct: false },
              { option: "C) Pollution Control", correct: false },
              { option: "D) Sustainable Fishing", correct: false },
              { option: "E) Aquaculture", correct: false },
              { option: "F) Marine Reserves", correct: false }
            ]
          },
          {
            question: "Which fishery practice helps ensure that fish populations remain healthy by limiting the amount of fish caught?",
            options: [
              { option: "A) Catch Limits", correct: true },
              { option: "B) Aquaculture", correct: false },
              { option: "C) Marine Reserves", correct: false },
              { option: "D) Habitat Restoration", correct: false }
            ],
            allOptions: [
              { option: "A) Catch Limits", correct: true },
              { option: "B) Aquaculture", correct: false },
              { option: "C) Marine Reserves", correct: false },
              { option: "D) Habitat Restoration", correct: false },
              { option: "E) Pollution Control", correct: false },
              { option: "F) Bycatch Reduction", correct: false }
            ]
          }
        ]
      },
      {
        theme: "Fish Behavior",
        questions: [
          {
            question: "Which fish species is known for its ability to create and use complex vocalizations to communicate?",
            options: [
              { option: "A) Goby", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Goby", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish is known for its migratory behavior, traveling long distances to spawn?",
            options: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Goldfish", correct: false }
            ],
            allOptions: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish demonstrates a form of cooperative hunting, where individuals work together to capture prey?",
            options: [
              { option: "A) Dolphin Fish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Dolphin Fish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish exhibits territorial behavior, often defending a specific area against other fish?",
            options: [
              { option: "A) Damselfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false }
            ],
            allOptions: [
              { option: "A) Damselfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish is known for its ability to build complex nests and exhibit parental care?",
            options: [
              { option: "A) Stickleback", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Stickleback", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish species is known for its ability to use the Earth’s magnetic field to navigate long migrations?",
            options: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Goldfish", correct: false }
            ],
            allOptions: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish is known for its unique strategy of hiding in the sand or mud to avoid predators?",
            options: [
              { option: "A) Flatfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Flatfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish uses elaborate displays and colors to attract mates during the breeding season?",
            options: [
              { option: "A) Peacock Bass", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false }
            ],
            allOptions: [
              { option: "A) Peacock Bass", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish species is known for its ability to navigate using its keen sense of smell?",
            options: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Goldfish", correct: false }
            ],
            allOptions: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Clownfish", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish is known for its ability to perform complex social interactions and form schools?",
            options: [
              { option: "A) Herring", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false }
            ],
            allOptions: [
              { option: "A) Herring", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          }
        ]
      },
      {
        theme: "Fish Species Identification",
        questions: [
          {
            question: "Which fish is known for its distinctive long, sharp teeth and predatory nature?",
            options: [
              { option: "A) Barracuda", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Barracuda", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish is characterized by its vibrant, multi-colored body and is often seen in reef aquariums?",
            options: [
              { option: "A) Clownfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false }
            ],
            allOptions: [
              { option: "A) Clownfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish is recognized by its flat, disc-like body and is known for its bottom-dwelling behavior?",
            options: [
              { option: "A) Skate", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Skate", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish species is notable for its elongated body and is commonly known as the 'sea snake'?",
            options: [
              { option: "A) Moray Eel", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Moray Eel", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish is well-known for its ability to generate electric shocks used for navigation and hunting?",
            options: [
              { option: "A) Electric Ray", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Electric Ray", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish has a distinctive beak-like mouth and is commonly found in coral reefs?",
            options: [
              { option: "A) Parrotfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Parrotfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish is known for its bright yellow coloration and is often associated with tropical marine environments?",
            options: [
              { option: "A) Yellow Tang", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false }
            ],
            allOptions: [
              { option: "A) Yellow Tang", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Goldfish", correct: false },
              { option: "E) Catfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish is recognized by its large, paddle-shaped fins and is known for its migratory behavior?",
            options: [
              { option: "A) Paddlefish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Paddlefish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish species is known for its unique pattern of black spots on a white or light-colored body?",
            options: [
              { option: "A) Spotty Grouper", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Spotty Grouper", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish is often found in freshwater rivers and is recognized by its long, slender body and large, round eyes?",
            options: [
              { option: "A) Glass Catfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Glass Catfish", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          }
        ]
      },
      {
        theme: "Historical and Cultural Significance of Fish",
        questions: [
          {
            question: "In which ancient civilization were fish considered sacred and associated with various deities?",
            options: [
              { option: "A) Ancient Egypt", correct: true },
              { option: "B) Ancient Greece", correct: false },
              { option: "C) Ancient Rome", correct: false },
              { option: "D) Ancient China", correct: false }
            ],
            allOptions: [
              { option: "A) Ancient Egypt", correct: true },
              { option: "B) Ancient Greece", correct: false },
              { option: "C) Ancient Rome", correct: false },
              { option: "D) Ancient China", correct: false },
              { option: "E) Ancient India", correct: false },
              { option: "F) Ancient Mesopotamia", correct: false }
            ]
          },
          {
            question: "Which fish is a symbol of prosperity and good fortune in Japanese culture and is often featured in festivals?",
            options: [
              { option: "A) Koi", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Koi", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish was historically used as a key food source for early European settlers in North America?",
            options: [
              { option: "A) Cod", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Cod", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "In which culture is the fish called “Tetra” seen as a symbol of fertility and is often kept as a pet in households?",
            options: [
              { option: "A) Brazilian", correct: true },
              { option: "B) Japanese", correct: false },
              { option: "C) Chinese", correct: false },
              { option: "D) Indian", correct: false }
            ],
            allOptions: [
              { option: "A) Brazilian", correct: true },
              { option: "B) Japanese", correct: false },
              { option: "C) Chinese", correct: false },
              { option: "D) Indian", correct: false },
              { option: "E) Egyptian", correct: false },
              { option: "F) Greek", correct: false }
            ]
          },
          {
            question: "Which fish is commonly featured in Christian symbolism, often representing Christ?",
            options: [
              { option: "A) Ichthys (Fish Symbol)", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Ichthys (Fish Symbol)", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish is celebrated in the Mediterranean diet and is known for its role in traditional dishes such as 'Bacalhau'?",
            options: [
              { option: "A) Cod", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Cod", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish is traditionally used in Jewish cuisine for dishes like gefilte fish?",
            options: [
              { option: "A) Carp", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Carp", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish has been an important part of Inuit culture, used both as a food source and in traditional ceremonies?",
            options: [
              { option: "A) Arctic Char", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Arctic Char", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Catfish", correct: false }
            ]
          },
          {
            question: "Which fish species is central to the cultural practices and ceremonies of many Pacific Island nations?",
            options: [
              { option: "A) Tuna", correct: true },
              { option: "B) Cod", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Tuna", correct: true },
              { option: "B) Cod", correct: false },
              { option: "C) Salmon", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          },
          {
            question: "Which fish is featured in various Native American myths and legends, often symbolizing transformation and abundance?",
            options: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Cod", correct: false },
              { option: "D) Clownfish", correct: false }
            ],
            allOptions: [
              { option: "A) Salmon", correct: true },
              { option: "B) Tuna", correct: false },
              { option: "C) Cod", correct: false },
              { option: "D) Clownfish", correct: false },
              { option: "E) Goldfish", correct: false },
              { option: "F) Carp", correct: false }
            ]
          }
        ]
      }            
];
  
export default quiz;