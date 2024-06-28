export const Templates = [
    {
    "name": "Documentation Summary Generator",
    "desc": "An AI tool that generates summaries for your documentation based on the provided content",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/2913/2913570.png",
    "aiPrompt": "Generate a concise summary in bullet points based on the provided documentation. Provide the result in rich text editor format.",
    "slug": "generate-doc-summary",
    "form": [
        {
            "label": "Enter your documentation content",
            "field": "textarea",
            "name": "content",
            "required": true
        }
    ]
},{
    "name": "API Documentation Formatter",
    "desc": "An AI tool that formats your API documentation for better readability",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/2620/2620750.png",
    "aiPrompt": "Format the provided API documentation to improve readability and structure. Provide the result in rich text editor format.",
    "slug": "format-api-doc",
    "form": [
        {
            "label": "Enter your API documentation",
            "field": "textarea",
            "name": "apiDoc",
            "required": true
        }
    ]
},
    {
    "name": "User Guide Creator",
    "desc": "An AI tool that generates user guides based on the provided application details",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/1038/1038605.png",
    "aiPrompt": "Create a user guide with step-by-step instructions based on the provided application details. Provide the result in rich text editor format.",
    "slug": "create-user-guide",
    "form": [
        {
            "label": "Enter application details",
            "field": "textarea",
            "name": "appDetails",
            "required": true
        }
    ]
},
    {
    "name": "Technical Manual Generator",
    "desc": "An AI tool that generates technical manuals based on the provided specifications",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/888/888857.png",
    "aiPrompt": "Generate a technical manual based on the provided specifications. Provide the result in rich text editor format.",
    "slug": "generate-tech-manual",
    "form": [
        {
            "label": "Enter specifications",
            "field": "textarea",
            "name": "specifications",
            "required": true
        }
    ]
},
    {
    "name": "FAQ Generator",
    "desc": "An AI tool that creates FAQs based on the provided documentation",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/1026/1026580.png",
    "aiPrompt": "Generate a list of frequently asked questions based on the provided documentation. Provide the result in rich text editor format.",
    "slug": "generate-faq",
    "form": [
        {
            "label": "Enter your documentation content",
            "field": "textarea",
            "name": "content",
            "required": true
        }
    ]
},
    {
    "name": "Release Notes Creator",
    "desc": "An AI tool that creates release notes based on the provided update details",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/3431/3431532.png",
    "aiPrompt": "Generate detailed release notes based on the provided update details. Provide the result in rich text editor format.",
    "slug": "create-release-notes",
    "form": [
        {
            "label": "Enter update details",
            "field": "textarea",
            "name": "updateDetails",
            "required": true
        }
    ]
},
    {
    "name": "Documentation Style Checker",
    "desc": "An AI tool that checks your documentation for style consistency and readability",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/902/902182.png",
    "aiPrompt": "Check the provided documentation for style consistency and readability. Highlight any issues and provide suggestions for improvement. Provide the result in rich text editor format.",
    "slug": "check-doc-style",
    "form": [
        {
            "label": "Enter your documentation content",
            "field": "textarea",
            "name": "content",
            "required": true
        }
    ]
},
    {
    "name": "Glossary Generator",
    "desc": "An AI tool that generates a glossary of terms based on your documentation",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/4304/4304540.png",
    "aiPrompt": "Generate a glossary of terms based on the provided documentation. Provide the result in rich text editor format.",
    "slug": "generate-glossary",
    "form": [
        {
            "label": "Enter your documentation content",
            "field": "textarea",
            "name": "content",
            "required": true
        }
    ]
},
    {
    "name": "Document Comparison Tool",
    "desc": "An AI tool that compares two versions of a document and highlights the differences",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/1828/1828774.png",
    "aiPrompt": "Compare the two provided documents and highlight the differences. Provide the result in rich text editor format.",
    "slug": "compare-docs",
    "form": [
        {
            "label": "Enter the first document",
            "field": "textarea",
            "name": "document1",
            "required": true
        },
        {
            "label": "Enter the second document",
            "field": "textarea",
            "name": "document2",
            "required": true
        }
    ]
},
    {
    "name": "Content Structure Analyzer",
    "desc": "An AI tool that analyzes the structure of your documentation and provides improvement suggestions",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/3291/3291672.png",
    "aiPrompt": "Analyze the structure of the provided documentation and suggest improvements. Provide the result in rich text editor format.",
    "slug": "analyze-doc-structure",
    "form": [
        {
            "label": "Enter your documentation content",
            "field": "textarea",
            "name": "content",
            "required": true
        }
    ]
},
    {
    "name": "Documentation Translation Helper",
    "desc": "An AI tool that assists in translating documentation into different languages",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/2351/2351203.png",
    "aiPrompt": "Translate the provided documentation into the specified language. Provide the result in rich text editor format.",
    "slug": "translate-doc",
    "form": [
        {
            "label": "Enter your documentation content",
            "field": "textarea",
            "name": "content",
            "required": true
        },
        {
            "label": "Select target language",
            "field": "dropdown",
            "name": "language",
            "options": ["Spanish", "French", "German", "Chinese", "Japanese", "Russian"],
            "required": true
        }
    ]
},
    {
    "name": "Documentation Template Generator",
    "desc": "An AI tool that generates templates for various types of documentation",
    "category": "Documentation",
    "icon": "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
    "aiPrompt": "Generate a template for the specified type of documentation. Provide the result in rich text editor format.",
    "slug": "generate-doc-template",
    "form": [
        {
            "label": "Select type of documentation",
            "field": "dropdown",
            "name": "docType",
            "options": ["User Manual", "Technical Specification", "API Guide", "Quick Start Guide", "Release Notes"],
            "required": true
        }
    ]
},


    {
        name: "Blog Title",
        desc: "An AI tool that generates blog titles based on your blog information",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/4905/4905380.png",
        aiPrompt: "Give me 5 blog topics in bullet points only based on the provided information. Provide the result in rich text editor format.",
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter your blog outline",
                field: "textarea",
                name: "outline",
                required: true
            }
        ]
    },
    {
        name: "Code Snippet Generator",
        desc: "An AI tool that generates code snippets based on your requirements.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/2103/2103808.png",
        aiPrompt: "Provide a code snippet for the given requirements. Provide the result in rich text editor format.",
        slug: "generate-code-snippet",
        form: [
            {
                label: "Enter your programming language",
                field: "input",
                name: "language",
                required: true
            },
            {
                label: "Enter your code requirements",
                field: "textarea",
                name: "requirements",
                required: true
            }
        ]
    },
    {
        name: "Bug Fix Suggestion",
        desc: "An AI tool that suggests fixes for bugs in your code.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/1827/1827543.png",
        aiPrompt: "Suggest fixes for the given bug in the code. Provide the result in rich text editor format.",
        slug: "bug-fix-suggestion",
        form: [
            {
                label: "Enter your programming language",
                field: "input",
                name: "language",
                required: true
            },
            {
                label: "Enter your code with the bug",
                field: "textarea",
                name: "buggyCode",
                required: true
            }
        ]
    },
    {
        name: "Code Review Assistant",
        desc: "An AI tool that provides code review comments for your code.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/2921/2921222.png",
        aiPrompt: "Provide code review comments for the given code. Provide the result in rich text editor format.",
        slug: "code-review-assistant",
        form: [
            {
                label: "Enter your programming language",
                field: "input",
                name: "language",
                required: true
            },
            {
                label: "Enter your code for review",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Algorithm Explanation",
        desc: "An AI tool that explains algorithms in simple terms.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/679/679720.png",
        aiPrompt: "Explain the given algorithm in simple terms. Provide the result in rich text editor format.",
        slug: "algorithm-explanation",
        form: [
            {
                label: "Enter the name of the algorithm",
                field: "input",
                name: "algorithmName",
                required: true
            },
            {
                label: "Enter the algorithm details",
                field: "textarea",
                name: "algorithmDetails",
                required: true
            }
        ]
    },
    {
        name: "Regex Pattern Generator",
        desc: "An AI tool that generates regex patterns based on your requirements.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/2565/2565673.png",
        aiPrompt: "Generate a regex pattern based on the given requirements. Provide the result in rich text editor format.",
        slug: "generate-regex-pattern",
        form: [
            {
                label: "Enter your regex requirements",
                field: "textarea",
                name: "regexRequirements",
                required: true
            }
        ]
    },
    {
        name: "Unit Test Generator",
        desc: "An AI tool that generates unit tests for your code.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/2553/2553661.png",
        aiPrompt: "Generate unit tests for the given code. Provide the result in rich text editor format.",
        slug: "generate-unit-tests",
        form: [
            {
                label: "Enter your programming language",
                field: "input",
                name: "language",
                required: true
            },
            {
                label: "Enter your code for generating tests",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Blog Content",
        desc: "An AI tool that generates blog content based on your blog outline",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/4905/4905380.png",
        aiPrompt: "Generate a detailed blog post based on the provided niche and outline. Provide the result in rich text editor format.",
        slug: "generate-blog-content",
        form: [
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter your blog outline",
                field: "textarea",
                name: "outline",
                required: true
            }
        ]
    },
    {
        name: "YouTube Tag Generator",
        desc: "An AI tool that generates tags for your YouTube videos based on your video content",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        aiPrompt: "Generate 10 relevant tags for a YouTube video based on the provided niche and description.",
        slug: "generate-youtube-tags",
        form: [
            {
                label: "Enter your video niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter your video description",
                field: "textarea",
                name: "description",
                required: true
            }
        ]
    },
    {
        name: "YouTube Video Title",
        desc: "An AI tool that generates engaging YouTube video titles based on your video content",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
        aiPrompt: "Give me 5 engaging YouTube video titles based on the provided niche and description. Provide the result in rich text editor format.",
        slug: "generate-youtube-title",
        form: [
            {
                label: "Enter your video niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter your video description",
                field: "textarea",
                name: "description",
                required: true
            }
        ]
    },
    {
        name: "Instagram Caption Generator",
        desc: "An AI tool that generates captivating Instagram captions based on your image content",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/174/174855.png",
        aiPrompt: "Generate 5 Instagram captions based on the provided image description and hashtags. Provide the result in rich text editor format.",
        slug: "generate-instagram-captions",
        form: [
            {
                label: "Enter your image description",
                field: "textarea",
                name: "description",
                required: true
            },
            {
                label: "Enter relevant hashtags",
                field: "input",
                name: "hashtags",
                required: true
            }
        ]
    },
    {
        name: "Twitter Post Generator",
        desc: "An AI tool that generates engaging Twitter posts based on your provided content",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
        aiPrompt: "Generate 5 engaging Twitter posts based on the provided content and hashtags. Provide the result in rich text editor format.",
        slug: "generate-twitter-posts",
        form: [
            {
                label: "Enter your content",
                field: "textarea",
                name: "content",
                required: true
            },
            {
                label: "Enter relevant hashtags",
                field: "input",
                name: "hashtags",
                required: true
            }
        ]
    },
    {
        name: "LinkedIn Post Generator",
        desc: "An AI tool that generates professional LinkedIn posts based on your provided content",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/174/174857.png",
        aiPrompt: "Generate 5 LinkedIn posts based on the provided content and keywords. Provide the result in rich text editor format.",
        slug: "generate-linkedin-posts",
        form: [
            {
                label: "Enter your content",
                field: "textarea",
                name: "content",
                required: true
            },
            {
                label: "Enter relevant keywords",
                field: "input",
                name: "keywords",
                required: true
            }
        ]
    },
    {
        name: "Facebook Post Generator",
        desc: "An AI tool that generates engaging Facebook posts based on your provided content",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
        aiPrompt: "Generate 5 engaging Facebook posts based on the provided content and hashtags. Provide the result in rich text editor format.",
        slug: "generate-facebook-posts",
        form: [
            {
                label: "Enter your content",
                field: "textarea",
                name: "content",
                required: true
            },
            {
                label: "Enter relevant hashtags",
                field: "input",
                name: "hashtags",
                required: true
            }
        ]
    },
    {
        name: "Pinterest Pin Description Generator",
        desc: "An AI tool that generates compelling Pinterest pin descriptions based on your provided content",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111535.png",
        aiPrompt: "Generate 5 Pinterest pin descriptions based on the provided content and keywords. Provide the result in rich text editor format.",
        slug: "generate-pinterest-pin-descriptions",
        form: [
            {
                label: "Enter your content",
                field: "textarea",
                name: "content",
                required: true
            },
            {
                label: "Enter relevant keywords",
                field: "input",
                name: "keywords",
                required: true
            }
        ]
    },
    {
        name: "TikTok Video Title",
        desc: "An AI tool that generates catchy TikTok video titles based on your video content",
        category: "TikTok",
        icon: "https://cdn-icons-png.flaticon.com/128/3046/3046127.png",
        aiPrompt: "Generate 5 catchy TikTok video titles based on the provided niche and description. Provide the result in rich text editor format.",
        slug: "generate-tiktok-video-title",
        form: [
            {
                label: "Enter your video niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter your video description",
                field: "textarea",
                name: "description",
                required: true
            }
        ]
    },
    {
        name: "TikTok Hashtag Generator",
        desc: "An AI tool that generates relevant TikTok hashtags based on your video content",
        category: "TikTok",
        icon: "https://cdn-icons-png.flaticon.com/128/3046/3046127.png",
        aiPrompt: "Generate 10 relevant TikTok hashtags based on the provided niche and description.",
        slug: "generate-tiktok-hashtags",
        form: [
            {
                label: "Enter your video niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter your video description",
                field: "textarea",
                name: "description",
                required: true
            }
        ]
    },
    {
        name: "Email Subject Line Generator",
        desc: "An AI tool that generates compelling email subject lines based on your email content",
        category: "Email",
        icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
        aiPrompt: "Generate 5 compelling email subject lines based on the provided content and purpose. Provide the result in rich text editor format.",
        slug: "generate-email-subject-lines",
        form: [
            {
                label: "Enter your email content",
                field: "textarea",
                name: "content",
                required: true
            },
            {
                label: "Enter the purpose of the email",
                field: "input",
                name: "purpose",
                required: true
            }
        ]
    },
    {
        name: "Database Schema Designer",
        desc: "An AI tool that helps you design database schemas based on your requirements.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/2904/2904079.png",
        aiPrompt: "Generate a database schema based on the given requirements. Provide the result in rich text editor format.",
        slug: "database-schema-designer",
        form: [
            {
                label: "Enter your database type (e.g., MySQL, PostgreSQL)",
                field: "input",
                name: "databaseType",
                required: true
            },
            {
                label: "Enter your requirements for the schema",
                field: "textarea",
                name: "schemaRequirements",
                required: true
            }
        ]
    },
    {
        name: "API Endpoint Generator",
        desc: "An AI tool that generates API endpoints based on your requirements.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/2878/2878585.png",
        aiPrompt: "Generate API endpoints based on the given requirements. Provide the result in rich text editor format.",
        slug: "generate-api-endpoints",
        form: [
            {
                label: "Enter your API type (e.g., REST, GraphQL)",
                field: "input",
                name: "apiType",
                required: true
            },
            {
                label: "Enter your API requirements",
                field: "textarea",
                name: "apiRequirements",
                required: true
            }
        ]
    },
    {
        name: "Documentation Generator",
        desc: "An AI tool that generates documentation for your code.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/3063/3063823.png",
        aiPrompt: "Generate documentation for the given code. Provide the result in rich text editor format.",
        slug: "generate-documentation",
        form: [
            {
                label: "Enter your programming language",
                field: "input",
                name: "language",
                required: true
            },
            {
                label: "Enter your code for documentation",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Performance Optimization Tips",
        desc: "An AI tool that provides performance optimization tips for your code.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/4436/4436481.png",
        aiPrompt: "Provide performance optimization tips for the given code. Provide the result in rich text editor format.",
        slug: "performance-optimization-tips",
        form: [
            {
                label: "Enter your programming language",
                field: "input",
                name: "language",
                required: true
            },
            {
                label: "Enter your code for optimization",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "Code Refactoring Suggestions",
        desc: "An AI tool that suggests refactoring improvements for your code.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/3785/3785154.png",
        aiPrompt: "Suggest refactoring improvements for the given code. Provide the result in rich text editor format.",
        slug: "code-refactoring-suggestions",
        form: [
            {
                label: "Enter your programming language",
                field: "input",
                name: "language",
                required: true
            },
            {
                label: "Enter your code for refactoring",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    },
    {
        name: "CSS Layout Generator",
        desc: "An AI tool that generates CSS layouts based on your design requirements.",
        category: "Developer",
        icon: "https://cdn-icons-png.flaticon.com/128/1183/1183672.png",
        aiPrompt: "Generate a CSS layout based on the given design requirements. Provide the result in rich text editor format.",
        slug: "generate-css-layout",
        form: [
            {
                label: "Enter your design requirements",
                field: "textarea",
                name: "designRequirements",
                required: true
            }
        ]
    },
    {
        name: "Fashion Outfit Generator",
        desc: "An AI tool that suggests fashion outfits based on your preferences and occasions.",
        category: "Lifestyle",
        icon: "https://cdn-icons-png.flaticon.com/128/181/181534.png",
        aiPrompt: "Suggest 5 fashion outfits based on the provided preferences and occasions. Provide the result in rich text editor format.",
        slug: "generate-fashion-outfits",
        form: [
            {
                label: "Enter your style preferences",
                field: "textarea",
                name: "preferences",
                required: true
            },
            {
                label: "Enter the occasion",
                field: "input",
                name: "occasion",
                required: true
            }
        ]
    },
    {
        name: "Makeup Tutorial Generator",
        desc: "An AI tool that generates makeup tutorials based on your desired look.",
        category: "Beauty",
        icon: "https://cdn-icons-png.flaticon.com/128/892/892511.png",
        aiPrompt: "Generate a step-by-step makeup tutorial for the given desired look. Provide the result in rich text editor format.",
        slug: "generate-makeup-tutorial",
        form: [
            {
                label: "Enter your desired makeup look",
                field: "textarea",
                name: "look",
                required: true
            }
        ]
    },
    {
        name: "Recipe Finder",
        desc: "An AI tool that suggests recipes based on available ingredients.",
        category: "Cooking",
        icon: "https://cdn-icons-png.flaticon.com/128/1046/1046856.png",
        aiPrompt: "Suggest 5 recipes based on the provided ingredients. Provide the result in rich text editor format.",
        slug: "find-recipes",
        form: [
            {
                label: "Enter available ingredients",
                field: "textarea",
                name: "ingredients",
                required: true
            }
        ]
    },
    {
        name: "Fitness Routine Planner",
        desc: "An AI tool that generates fitness routines based on your goals.",
        category: "Health",
        icon: "https://cdn-icons-png.flaticon.com/128/3043/3043810.png",
        aiPrompt: "Generate a fitness routine based on the provided goals. Provide the result in rich text editor format.",
        slug: "plan-fitness-routine",
        form: [
            {
                label: "Enter your fitness goals",
                field: "textarea",
                name: "goals",
                required: true
            }
        ]
    },
    {
        name: "Skincare Routine Advisor",
        desc: "An AI tool that suggests skincare routines based on your skin type and issues.",
        category: "Beauty",
        icon: "https://cdn-icons-png.flaticon.com/128/924/924915.png",
        aiPrompt: "Suggest a skincare routine based on the provided skin type and issues. Provide the result in rich text editor format.",
        slug: "skincare-routine-advisor",
        form: [
            {
                label: "Enter your skin type",
                field: "input",
                name: "skinType",
                required: true
            },
            {
                label: "Enter your skin issues",
                field: "textarea",
                name: "skinIssues",
                required: true
            }
        ]
    },
    {
        name: "Travel Itinerary Planner",
        desc: "An AI tool that generates travel itineraries based on your destination and preferences.",
        category: "Travel",
        icon: "https://cdn-icons-png.flaticon.com/128/2991/2991106.png",
        aiPrompt: "Generate a travel itinerary based on the provided destination and preferences. Provide the result in rich text editor format.",
        slug: "plan-travel-itinerary",
        form: [
            {
                label: "Enter your travel destination",
                field: "input",
                name: "destination",
                required: true
            },
            {
                label: "Enter your travel preferences",
                field: "textarea",
                name: "preferences",
                required: true
            }
        ]
    },
    {
        name: "Workout Plan Generator",
        desc: "An AI tool that generates workout plans based on your fitness goals.",
        category: "Fitness",
        icon: "https://cdn-icons-png.flaticon.com/128/3068/3068320.png",
        aiPrompt: "Generate a workout plan based on the provided fitness goals. Provide the result in rich text editor format.",
        slug: "generate-workout-plan",
        form: [
            {
                label: "Enter your fitness goals",
                field: "textarea",
                name: "goals",
                required: true
            }
        ]
    },
    {
        name: "Gadget Review Finder",
        desc: "An AI tool that finds reviews for gadgets based on your interests.",
        category: "Technology",
        icon: "https://cdn-icons-png.flaticon.com/128/3649/3649372.png",
        aiPrompt: "Find reviews for gadgets based on the provided interests. Provide the result in rich text editor format.",
        slug: "find-gadget-reviews",
        form: [
            {
                label: "Enter your gadget interests",
                field: "textarea",
                name: "interests",
                required: true
            }
        ]
    },
    {
        name: "Game Recommendation",
        desc: "An AI tool that suggests video games based on your preferences.",
        category: "Gaming",
        icon: "https://cdn-icons-png.flaticon.com/128/890/890985.png",
        aiPrompt: "Suggest 5 video games based on the provided preferences. Provide the result in rich text editor format.",
        slug: "recommend-games",
        form: [
            {
                label: "Enter your game preferences",
                field: "textarea",
                name: "preferences",
                required: true
            }
        ]
    },
    {
        name: "Tech News Aggregator",
        desc: "An AI tool that gathers the latest tech news based on your interests.",
        category: "Technology",
        icon: "https://cdn-icons-png.flaticon.com/128/1036/1036306.png",
        aiPrompt: "Gather the latest tech news based on the provided interests. Provide the result in rich text editor format.",
        slug: "aggregate-tech-news",
        form: [
            {
                label: "Enter your tech interests",
                field: "textarea",
                name: "interests",
                required: true
            }
        ]
    },
    {
        name: "DIY Project Ideas",
        desc: "An AI tool that suggests DIY project ideas based on your skills and interests.",
        category: "Hobbies",
        icon: "https://cdn-icons-png.flaticon.com/128/3062/3062634.png",
        aiPrompt: "Suggest 5 DIY project ideas based on the provided skills and interests. Provide the result in rich text editor format.",
        slug: "suggest-diy-projects",
        form: [
            {
                label: "Enter your skills",
                field: "textarea",
                name: "skills",
                required: true
            },
            {
                label: "Enter your project interests",
                field: "textarea",
                name: "interests",
                required: true
            }
        ]
    },
    {
        name: "Fantasy Sports Lineup",
        desc: "An AI tool that generates fantasy sports lineups based on player stats.",
        category: "Sports",
        icon: "https://cdn-icons-png.flaticon.com/128/3062/3062634.png",
        aiPrompt: "Generate a fantasy sports lineup based on the provided player stats. Provide the result in rich text editor format.",
        slug: "generate-fantasy-lineup",
        form: [
            {
                label: "Enter your sport",
                field: "input",
                name: "sport",
                required: true
            },
            {
                label: "Enter player stats",
                field: "textarea",
                name: "playerStats",
                required: true
            }
        ]
    },
    {
        name: "Vulnerability Scanner",
        desc: "An AI tool that scans for vulnerabilities in your system or application.",
        category: "Cybersecurity",
        icon: "https://cdn-icons-png.flaticon.com/128/595/595067.png",
        aiPrompt: "Scan the given system or application for vulnerabilities and provide a detailed report. Provide the result in rich text editor format.",
        slug: "vulnerability-scanner",
        form: [
            {
                label: "Enter system or application details",
                field: "textarea",
                name: "details",
                required: true
            }
        ]
    },
    {
        name: "Penetration Test Planner",
        desc: "An AI tool that generates a penetration testing plan based on your requirements.",
        category: "Cybersecurity",
        icon: "https://cdn-icons-png.flaticon.com/128/1802/1802979.png",
        aiPrompt: "Generate a detailed penetration testing plan based on the provided requirements. Provide the result in rich text editor format.",
        slug: "penetration-test-planner",
        form: [
            {
                label: "Enter your penetration testing requirements",
                field: "textarea",
                name: "requirements",
                required: true
            }
        ]
    },
    {
        name: "Incident Response Guide",
        desc: "An AI tool that provides a step-by-step incident response guide based on the type of cyber attack.",
        category: "Cybersecurity",
        icon: "https://cdn-icons-png.flaticon.com/128/2933/2933249.png",
        aiPrompt: "Provide a step-by-step incident response guide based on the given type of cyber attack. Provide the result in rich text editor format.",
        slug: "incident-response-guide",
        form: [
            {
                label: "Enter the type of cyber attack",
                field: "input",
                name: "attackType",
                required: true
            }
        ]
    },
    {
        name: "Threat Intelligence Aggregator",
        desc: "An AI tool that aggregates the latest threat intelligence based on your interests.",
        category: "Cybersecurity",
        icon: "https://cdn-icons-png.flaticon.com/128/1280/1280250.png",
        aiPrompt: "Aggregate the latest threat intelligence based on the provided interests. Provide the result in rich text editor format.",
        slug: "threat-intelligence-aggregator",
        form: [
            {
                label: "Enter your threat intelligence interests",
                field: "textarea",
                name: "interests",
                required: true
            }
        ]
    },
    {
        name: "Malware Analysis Report",
        desc: "An AI tool that generates a malware analysis report based on the provided malware sample.",
        category: "Cybersecurity",
        icon: "https://cdn-icons-png.flaticon.com/128/1070/1070834.png",
        aiPrompt: "Analyze the provided malware sample and generate a detailed report. Provide the result in rich text editor format.",
        slug: "malware-analysis-report",
        form: [
            {
                label: "Enter malware sample details",
                field: "textarea",
                name: "malwareSample",
                required: true
            }
        ]
    },
    {
        name: "Phishing Simulation",
        desc: "An AI tool that creates phishing simulation exercises to test your organization's security awareness.",
        category: "Cybersecurity",
        icon: "https://cdn-icons-png.flaticon.com/128/1034/1034111.png",
        aiPrompt: "Create a phishing simulation exercise based on the provided parameters. Provide the result in rich text editor format.",
        slug: "phishing-simulation",
        form: [
            {
                label: "Enter simulation parameters",
                field: "textarea",
                name: "parameters",
                required: true
            }
        ]
    },
    {
        name: "Security Policy Generator",
        desc: "An AI tool that generates security policies based on your organization's requirements.",
        category: "Cybersecurity",
        icon: "https://cdn-icons-png.flaticon.com/128/2965/2965302.png",
        aiPrompt: "Generate a detailed security policy based on the provided requirements. Provide the result in rich text editor format.",
        slug: "security-policy-generator",
        form: [
            {
                label: "Enter your organization's requirements",
                field: "textarea",
                name: "requirements",
                required: true
            }
        ]
    },
    {
        name: "Password Strength Analyzer",
        desc: "An AI tool that analyzes the strength of passwords and provides recommendations.",
        category: "Cybersecurity",
        icon: "https://cdn-icons-png.flaticon.com/128/2140/2140698.png",
        aiPrompt: "Analyze the given password for strength and provide recommendations for improvement. Provide the result in rich text editor format.",
        slug: "password-strength-analyzer",
        form: [
            {
                label: "Enter the password",
                field: "input",
                name: "password",
                required: true
            }
        ]
    }
]
