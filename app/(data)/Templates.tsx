export const Templates = [
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
]
