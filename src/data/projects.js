export const projectsData = [
    {
      title: "Offensive Text Detection using Natural Language Processing",
      technologies: ["Python", "PyTorch", "Transformers", "HuggingFace"],
      description: [
        "Built a novel two-phase training approach combining complete and balanced datasets, achieving PR-AUC scores of 0.6137 and 0.6476 on Civil Comments and Jigsaw datasets.",
        "Evaluated performance of 3 model architectures (LR, LSTM, DistilBERT) across 6 toxicity categories, with DistilBERT achieving 98.23% AUC and demonstrating transformers superior capabilities compared to traditional approaches in NLP.",
        "Published trained DistilBERT models on HuggingFace Hub and created an interactive demo space enabling real-time toxicity detection."
      ],
      image: "/assets/images/nlp-project.jpg", // Placeholder - replace with actual project image
      link: "https://huggingface.co/spaces/prudhvi19/ToxicCommentsClassifier"
    },
    {
      title: "Purdue Fort Wayne Attendance Tracking System",
      technologies: ["Java", "SQLite", "Outlook API", "ZXing Lib", "GitHub"],
      description: [
        "Collaborated with professor to develop and enhance an Android application for student QR attendance tracking and report generation, improving classroom management efficiency.",
        "Designed and coded a UI screen which display detailed student attendance data, including visual indicators for attendance status.",
        "Integrated an automated report generation feature, providing detailed attendance analytics for individual students, courses, and specific time periods."
      ],
      image: "/assets/images/attendance-tracking.jpg", // Placeholder - replace with actual project image
      // link: "https://github.com/Prudhvi-19/attendance-tracking"
    },
    {
      title: "Breast Cancer Histology Images Classification using Convolutional Neural Networks",
      technologies: ["Python", "OpenCV lib", "fast.ai lib"],
      description: [
        "Constructed three CNN models that are trained on Densenet-201 architecture.",
        "Applied different extensive image-processing techniques like color normalization and dividing images into patches and data augmentation for the training dataset.",
        "Achieved a good accuracy score of 88% from these models by applying a majority voting scheme."
      ],
      image: "/assets/images/cnn-project.jpg", // Placeholder - replace with actual project image
      link: "https://github.com/Prudhvi-19/Breast-Cancer-Classification-using-CNN"
    },
    {
      title: "Personal Portfolio Website",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Formspree", "GitHub Pages"],
      description: [
        "Designed and developed a modern, responsive portfolio website using React and Tailwind CSS with a data-driven architecture that separates content from presentation for easy maintenance.",
        "Implemented mobile-first responsive design principles with optimized layout components, ensuring seamless user experience across mobile, tablet, and desktop devices.",
        "Integrated third-party APIs including Formspree for backend contact form processing, with proper error handling and user feedback mechanisms."
      ],
      image: "/assets/images/portfolio-project.jpg",
      link: "https://github.com/Prudhvi-19/portfolio"
    },
  ];
  