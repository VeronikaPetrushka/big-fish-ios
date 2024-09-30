const taxonomy = [
    {
      title: "What is Fish Systematics?",
      image: require('../assets/directory/taxonomy1.png'),
      description: "Systematics is the science of classification and the study of evolutionary relationships between organisms. In fish systematics, it helps us understand how fish evolved and how they are classified based on shared traits and genetic data. The main components of systematics are taxonomy (scientific naming and categorization) and phylogenetics (the study of evolutionary relationships).",
    },
    {
      title: "The Classification Hierarchy of Fish",
      image: require('../assets/directory/taxonomy2.png'),
      description: "The systematics of fish follow the general taxonomic hierarchy:",
      details: [
        "Kingdom: Animalia (all fish are animals)",
        "Phylum: Chordata (Chordates)",
        "Class: The major groups of fish",
        "Order, Family, Genus, Species: These are the finer divisions."
      ]
    },
    {
      title: "Major Classes of Fish",
      image: require('../assets/directory/taxonomy3.png'),
      description: "Fish are classified into three main classes:",
      classes: [
        {
          name: "Agnatha (Jawless Fish)",
          description: "Primitive fish without jaws, such as lampreys and hagfish.",
        },
        {
          name: "Chondrichthyes (Cartilaginous Fish)",
          description: "This group includes sharks, rays, and chimeras, with skeletons made of cartilage.",
        },
        {
          name: "Osteichthyes (Bony Fish)",
          description: "The largest group of fish, with skeletons made of bone, and includes most commonly known fish species.",
        }
      ],
    },
    {
      title: 'Agnatha (Jawless Fish)',
      image: require('../assets/directory/taxonomy4.png'),
      description: 'Agnathans are the most primitive class of fish, distinguished by their lack of jaws and paired fins. They include species like lampreys and hagfish.',
      examples: '- Examples: Lampreys (*Petromyzontiformes*), hagfish (*Myxiniformes*).',
      features: '- Key Features: Cartilaginous skeleton, absence of paired fins, scavenger or parasitic lifestyles.'
    },
    {
      title: 'Chondrichthyes (Cartilaginous Fish)',
      image: require('../assets/directory/taxonomy5.png'),
      description: 'This class includes sharks, rays, and chimeras. They have a skeleton made of cartilage, and many are top predators in marine environments.',
      examples: '- Examples: Great white shark (*Carcharodon carcharias*), manta ray (*Manta birostris*).',
      features: '- Key Features: Cartilaginous skeleton, jaws, paired fins.'
    },
    {
      title: 'Osteichthyes (Bony Fish)',
      image: require('../assets/directory/taxonomy6.png'),
      description: 'The bony fish class includes the majority of both marine and freshwater species. These fish have skeletons made of bone.',
      classes: 'Subclasses',
      classes: {
        description: ' - Actinopterygii (Ray-finned Fish): This includes the majority of modern fish species.',
        description: ' - Sarcopterygii (Lobe-finned Fish): This group includes coelacanths and lungfish.'
      },
      features: '- Key Features: Bony skeleton, swim bladder (in most species) to maintain buoyancy.'
    },
    {
      title: 'Actinopterygii (Ray-finned Fish)',
      image: require('../assets/directory/taxonomy7.png'),
      description: 'Ray-finned fish have fins supported by bony rays. They make up over 99% of all known fish species and are incredibly diverse in form and function.',
      examples: '- Examples: Trout, pike, clownfish.',
      features: '- Key Features: Wide range of body shapes and sizes, bony skeleton.'
    },
    {
      title: 'Sarcopterygii (Lobe-finned Fish)',
      image: require('../assets/directory/taxonomy8.png'),
      description: 'Lobe-finned fish have fleshy fins supported by bones. This group is significant in evolutionary biology as it includes the ancestors of all terrestrial vertebrates.',
      examples: '- Examples: Coelacanths, lungfish.',
      features: '- Key Features: Fleshy, lobed fins, and some species have lungs in addition to gills.'
    },
    {
      title: "Orders and Families of Fish",
      image: require('../assets/directory/taxonomy9.png'),
      description: "Within each class of fish, there exists a complex system of division into orders and families, which allows scientists to classify the diverse species of fish and their unique characteristics in more detail.",
      details: "For example, in the class of bony fish, which includes a vast number of species, one can distinguish the order *Perciformes*, which includes fish similar to perch, such as cod and sardine. This order is one of the largest among fish and includes many economically important species. On the other hand, the class of cartilaginous fish, which encompasses sharks and rays, has its own order - *Carcharhiniformes*, which includes representatives such as the tiger shark and hammerhead shark. This classification not only helps scientists systematize fish but also contributes to a better understanding of their evolution, ecology, and behavior. Thanks to this structure, researchers can also study the impact of human activity on different groups of fish and develop conservation strategies."
    },
    {
      title: "Evolutionary Significance of Fish",
      image: require('../assets/directory/taxonomy10.png'),
      description: "Fish are one of the oldest groups of vertebrates, with an evolution that spans over 500 million years.",
      details: "Their journey began in the Cambrian period with simple jawless creatures, which later evolved into jawed fish, allowing them to feed more effectively and occupy diverse environments. Fish play a crucial role in balancing ecosystems and have significant importance for human culture and economy. Studying the evolution of fish helps us understand the complexity of life on Earth and the importance of preserving their species and habitats."
    }
  ];
  
export default taxonomy;