/* ==============================================
   Gyagenda Peter Owns the code
   Byte Ai — Byte Lab site assistant
   ============================================== */
(function () {
  const root = document.getElementById('byteAi');
  if (!root) return;

  const thread = document.getElementById('byteAiThread');
  const form = document.getElementById('byteAiForm');
  const input = document.getElementById('byteAiInput');
  const toggle = document.getElementById('byteAiToggle');
  const closeBtn = document.getElementById('byteAiClose');
  const chipsWrap = document.getElementById('byteAiChips');
  const AVATAR = 'Portfolio Picture/byte-ai-avatar.jpg';

  const LINKS = {
    whatsapp: { href: 'https://wa.me/256762426842?text=Hi%20Gyagenda%20Peter%20K%2C%20I%20want%20to%20talk', label: 'WhatsApp Peter' },
    email: { href: 'mailto:codetherapist.pita@gmail.com', label: 'Email Gmail' },
    form: { href: '#contact', label: 'Open the site form', jump: true },
    projects: { href: '#projects', label: 'See the projects', jump: true },
    bytelab: { href: '#bytelab', label: 'Byte Lab on this site', jump: true },
    skills: { href: '#skills', label: 'Skills on this site', jump: true },
    linkedin: { href: 'https://www.linkedin.com/in/code-therapist-1142243b5/', label: 'LinkedIn' },
    github: { href: 'https://github.com/codetherapistpita-oss', label: 'GitHub' },
    x: { href: 'https://x.com/1codetherapist', label: 'X' },
    site: { href: 'https://codetherapist.netlify.app/', label: 'Code Therapist website' },
    cv: {
      href: 'MY%20PORTIFIOLIO.pdf',
      label: 'Download Peter’s CV',
      download: true,
      downloadName: 'Gyagenda-Peter-K-CV-Code-Therapist.pdf'
    },
    cvPage: { href: 'cv.html', label: 'Open the CV page' },
    kiu: { href: 'https://kiu.ac.ug/', label: 'Kampala International University' },
    princeton: { href: 'https://www.princeton.edu/', label: 'Princeton University' }
  };

  const REACH = [LINKS.whatsapp, LINKS.email, LINKS.form, LINKS.linkedin, LINKS.x, LINKS.github];
  const PLATFORMS = [LINKS.site, LINKS.linkedin, LINKS.github, LINKS.x, LINKS.whatsapp];
  const STUDY = [LINKS.kiu, LINKS.princeton, LINKS.cv];
  const PETER_GALLERY = [
    { src: 'Portfolio Picture/peter-hero-1.jpg', alt: 'Gyagenda Peter K of Byte Lab outside the office' },
    { src: 'Portfolio Picture/peter-hero-2.jpg', alt: 'Gyagenda Peter K in Byte Lab uniform' },
    { src: 'Portfolio Picture/peter-hero-3.jpg', alt: 'Gyagenda Peter K in Muyenga, Kampala' },
    { src: 'Portfolio Picture/gyagenda-hero.jpeg', alt: 'Gyagenda Peter K, Code Therapist' },
    { src: 'Portfolio Picture/gyagenda-about.jpeg', alt: 'Gyagenda Peter K of Code Therapist and Byte Lab' }
  ];
  let peterPhotoCursor = 0;
  function nextPeterPhotos() {
    const out = [];
    const count = peterPhotoCursor % 2 === 0 ? 2 : 1;
    for (let i = 0; i < count; i++) {
      out.push(PETER_GALLERY[peterPhotoCursor % PETER_GALLERY.length]);
      peterPhotoCursor += 1;
    }
    return out;
  }

  const DICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';
  const LOGO = {
    python: DICON + 'python/python-original.svg',
    javascript: DICON + 'javascript/javascript-original.svg',
    nodejs: DICON + 'nodejs/nodejs-original.svg',
    php: DICON + 'php/php-original.svg',
    csharp: DICON + 'csharp/csharp-original.svg',
    java: DICON + 'java/java-original.svg',
    html5: DICON + 'html5/html5-original.svg',
    css3: DICON + 'css3/css3-original.svg',
    react: DICON + 'react/react-original.svg',
    nextjs: DICON + 'nextjs/nextjs-original.svg',
    git: DICON + 'git/git-original.svg',
    github: DICON + 'github/github-original.svg',
    docker: DICON + 'docker/docker-original.svg',
    linux: DICON + 'linux/linux-original.svg',
    unity: DICON + 'unity/unity-original.svg',
    flutter: DICON + 'flutter/flutter-original.svg',
    vscode: DICON + 'vscode/vscode-original.svg',
    visualstudio: DICON + 'visualstudio/visualstudio-original.svg',
    mysql: DICON + 'mysql/mysql-original.svg',
    postgresql: DICON + 'postgresql/postgresql-original.svg',
    mongodb: DICON + 'mongodb/mongodb-original.svg',
    nginx: DICON + 'nginx/nginx-original.svg',
    apache: DICON + 'apache/apache-original.svg',
    figma: DICON + 'figma/figma-original.svg',
    typescript: DICON + 'typescript/typescript-original.svg',
    redis: DICON + 'redis/redis-original.svg',
    androidstudio: DICON + 'androidstudio/androidstudio-original.svg',
    composer: DICON + 'composer/composer-original.svg',
    npm: DICON + 'npm/npm-original-wordmark.svg',
    yarn: DICON + 'yarn/yarn-original.svg',
    filezilla: 'https://cdn.simpleicons.org/filezilla',
    xampp: 'https://cdn.simpleicons.org/xampp',
    putty: 'https://cdn.simpleicons.org/putty'
  };
  const LOGO_BY_NAME = {
    Programming: ['python', 'javascript', 'php', 'csharp'],
    Software: ['vscode', 'python', 'docker'],
    IT: ['linux', 'vscode'],
    'Web development': ['html5', 'css3', 'javascript'],
    Python: ['python'],
    JavaScript: ['javascript', 'nodejs'],
    TypeScript: ['typescript'],
    PHP: ['php'],
    'C# and .NET': ['csharp'],
    Java: ['java'],
    HTML: ['html5'],
    CSS: ['css3'],
    SQL: ['mysql', 'postgresql'],
    'Node.js': ['nodejs'],
    React: ['react'],
    'React Native': ['react'],
    'Next.js': ['nextjs'],
    Git: ['git'],
    GitHub: ['github'],
    'Android Studio': ['androidstudio'],
    Unity: ['unity'],
    Flutter: ['flutter'],
    Docker: ['docker'],
    Figma: ['figma'],
    Linux: ['linux'],
    XAMPP: ['xampp'],
    FileZilla: ['filezilla'],
    MongoDB: ['mongodb'],
    Redis: ['redis'],
    Nginx: ['nginx'],
    Apache: ['apache'],
    'Visual Studio Code': ['vscode'],
    'Visual Studio': ['visualstudio'],
    npm: ['npm'],
    Yarn: ['yarn'],
    Composer: ['composer'],
    IDE: ['vscode'],
    Frontend: ['html5', 'css3', 'react'],
    Backend: ['nodejs', 'php', 'python'],
    PuTTY: ['putty']
  };
  function logosFor(item) {
    const ids = (item && LOGO_BY_NAME[item.name]) || [];
    return ids.map(id => ({ src: LOGO[id], alt: id + ' logo' })).filter(x => x.src);
  }
  const memory = { awaiting: null };

  const IT_KB = [
    { keys: ['computer programming', 'programming', 'coding', 'programmer', 'what is code'], name: 'Programming', text: 'Programming (also called coding) is writing instructions a computer can follow. You use a language such as Python, JavaScript, PHP, or C# to build websites, apps, games, and tools. That is the core of Byte Lab’s work.', links: [{ href: 'https://developer.mozilla.org/en-US/docs/Learn', label: 'Learn to code on MDN' }, { href: 'https://code.visualstudio.com/download', label: 'Download VS Code' }] },
    { keys: ['software development', 'software', 'application software'], name: 'Software', text: 'Software is the programs that run on a device — a website, a mobile app, a game, or an operating system. Developers write software; Byte Lab ships it for clients.', links: [{ href: 'https://developer.mozilla.org/en-US/docs/Learn', label: 'MDN Learn' }] },
    { keys: ['information technology', 'what is it'], name: 'IT', text: 'IT (information technology) is computers, software, networks, and data. It covers websites, apps, servers, and security. That is Byte Lab’s field.' },
    { keys: ['algorithm', 'algorithms'], name: 'Algorithm', text: 'An algorithm is a clear set of steps to solve a problem — like a recipe for the computer. Search, sorting, and login checks are algorithms.' },
    { keys: ['database', 'databases'], name: 'Database', text: 'A database stores structured data so apps can save and look up records — users, products, orders. SQL (MySQL, PostgreSQL) is the usual language.', links: [{ href: 'https://www.postgresql.org/download/', label: 'Download PostgreSQL' }] },
    { keys: ['api', 'apis', 'rest api'], name: 'API', text: 'An API is how two programs talk. Your app sends a request; a server sends data back. Byte Lab builds and consumes APIs in PHP, Node, and Python.' },
    { keys: ['backend', 'back end', 'server side'], name: 'Backend', text: 'The backend is the server side: databases, APIs, logins, and business rules. PHP, Node.js, Python, and C# are common here.' },
    { keys: ['frontend', 'front end', 'client side'], name: 'Frontend', text: 'The frontend is what you see in the browser: layout, colour, and clicks. It is HTML, CSS, and JavaScript — often with React.' },
    { keys: ['operating system', 'operating systems'], name: 'Operating system', text: 'An operating system (Windows, macOS, Linux, Android) manages hardware so programs can run. Linux is what most servers use.', links: [{ href: 'https://ubuntu.com/download', label: 'Download Ubuntu' }] },
    { keys: ['internet', 'world wide web', 'the web'], name: 'Internet', text: 'The internet is the global network of computers. The web (sites and browsers) is one way we use it. Byte Lab builds the sites and apps that live on it.' },
    { keys: ['html css js', 'web development'], name: 'Web development', text: 'Web development is HTML (structure), CSS (look), and JavaScript (behaviour), plus backends like PHP, Node, or Python.', links: [{ href: 'https://developer.mozilla.org/en-US/docs/Learn', label: 'MDN Learn Web' }] },
    { keys: ['visual studio code', 'vs code', 'vscode'], name: 'Visual Studio Code', text: 'Visual Studio Code (VS Code) is a free editor from Microsoft. People write JavaScript, Python, PHP, C#, HTML, and more in it. Byte Lab uses it every day.', links: [{ href: 'https://code.visualstudio.com/download', label: 'Download Visual Studio Code' }, { href: 'https://code.visualstudio.com/', label: 'VS Code website' }] },
    { keys: ['visual studio', 'vs 2022', 'visualstudio'], name: 'Visual Studio', text: 'Visual Studio is Microsoft’s full IDE — stronger for C#, .NET, and Unity than VS Code. Download the Community edition for free.', links: [{ href: 'https://visualstudio.microsoft.com/downloads/', label: 'Download Visual Studio' }] },
    { keys: ['python'], name: 'Python', text: 'Python is a language for scripts, data, AI, and backends. It is readable and used worldwide. Official site: python.org.', links: [{ href: 'https://www.python.org/downloads/', label: 'Download Python' }, { href: 'https://www.python.org/', label: 'Python website' }] },
    { keys: ['javascript', 'java script', 'js language'], name: 'JavaScript', text: 'JavaScript runs in the browser and on servers (Node.js). It powers interactive websites. Docs live on MDN and javascript.info.', links: [{ href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', label: 'JavaScript on MDN' }, { href: 'https://nodejs.org/', label: 'Node.js website' }] },
    { keys: ['typescript', 'type script'], name: 'TypeScript', text: 'TypeScript is JavaScript with types. It catches bugs before you ship. Made by Microsoft.', links: [{ href: 'https://www.typescriptlang.org/', label: 'TypeScript website' }] },
    { keys: ['php'], name: 'PHP', text: 'PHP is a server language for websites and APIs. WordPress is built on it, but Byte Lab uses PHP for custom systems too.', links: [{ href: 'https://www.php.net/downloads.php', label: 'Download PHP' }, { href: 'https://www.php.net/', label: 'PHP website' }] },
    { keys: ['c#', 'csharp', 'c sharp', 'dotnet', '.net'], name: 'C# and .NET', text: 'C# is Microsoft’s language for apps, games (Unity), and servers. It runs on .NET.', links: [{ href: 'https://dotnet.microsoft.com/download', label: 'Download .NET' }, { href: 'https://learn.microsoft.com/dotnet/csharp/', label: 'C# docs' }] },
    { keys: ['java'], name: 'Java', text: 'Java is used for Android, enterprise backends, and cross-platform apps. Get a JDK from Adoptium or Oracle.', links: [{ href: 'https://adoptium.net/', label: 'Download Java (Adoptium)' }, { href: 'https://www.java.com/', label: 'Java website' }] },
    { keys: ['html'], name: 'HTML', text: 'HTML is the structure of every web page — headings, links, forms, images. Learn it on MDN.', links: [{ href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', label: 'HTML on MDN' }] },
    { keys: ['css'], name: 'CSS', text: 'CSS styles web pages: colour, layout, animation. It sits on top of HTML.', links: [{ href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', label: 'CSS on MDN' }] },
    { keys: ['sql', 'mysql', 'postgres', 'postgresql'], name: 'SQL', text: 'SQL is how you ask a database for data. MySQL and PostgreSQL are common engines.', links: [{ href: 'https://dev.mysql.com/downloads/', label: 'Download MySQL' }, { href: 'https://www.postgresql.org/download/', label: 'Download PostgreSQL' }] },
    { keys: ['node.js', 'nodejs', 'node js'], name: 'Node.js', text: 'Node.js lets JavaScript run on the server. Use it for APIs and tools. Install LTS from the official site.', links: [{ href: 'https://nodejs.org/en/download', label: 'Download Node.js' }] },
    { keys: ['react native'], name: 'React Native', text: 'React Native builds mobile apps with JavaScript for Android and iOS. Byte Lab uses it for app work.', links: [{ href: 'https://reactnative.dev/', label: 'React Native website' }] },
    { keys: ['react'], name: 'React', text: 'React is a library for building web interfaces. It is the core of many modern sites.', links: [{ href: 'https://react.dev/', label: 'React website' }] },
    { keys: ['next.js', 'nextjs', 'next js'], name: 'Next.js', text: 'Next.js is a React framework for fast websites and apps, with routing and server rendering.', links: [{ href: 'https://nextjs.org/', label: 'Next.js website' }] },
    { keys: ['git'], name: 'Git', text: 'Git is version control — it saves the history of your code. GitHub hosts Git repositories online.', links: [{ href: 'https://git-scm.com/downloads', label: 'Download Git' }, { href: 'https://github.com/', label: 'GitHub' }] },
    { keys: ['github'], name: 'GitHub', text: 'GitHub is where developers store code, issues, and collaboration. Peter is on GitHub as well.', links: [{ href: 'https://github.com/', label: 'GitHub website' }, LINKS.github] },
    { keys: ['android studio'], name: 'Android Studio', text: 'Android Studio is Google’s official app for building Android apps (Kotlin/Java).', links: [{ href: 'https://developer.android.com/studio', label: 'Download Android Studio' }] },
    { keys: ['unity hub', 'unity'], name: 'Unity', text: 'Unity is a game and 3D engine. Peter works in C# and Unity. Install Unity Hub, then a Unity editor.', links: [{ href: 'https://unity.com/download', label: 'Download Unity Hub' }] },
    { keys: ['flutter'], name: 'Flutter', text: 'Flutter (Google) builds Android and iOS apps from one Dart codebase.', links: [{ href: 'https://docs.flutter.dev/get-started/install', label: 'Install Flutter' }] },
    { keys: ['docker'], name: 'Docker', text: 'Docker packages apps so they run the same on any machine. Used a lot for servers.', links: [{ href: 'https://www.docker.com/products/docker-desktop/', label: 'Download Docker Desktop' }] },
    { keys: ['postman'], name: 'Postman', text: 'Postman lets you test APIs — send requests and see responses.', links: [{ href: 'https://www.postman.com/downloads/', label: 'Download Postman' }] },
    { keys: ['figma'], name: 'Figma', text: 'Figma is a browser design tool for UI, prototypes, and handoff to developers.', links: [{ href: 'https://www.figma.com/downloads/', label: 'Download Figma' }] },
    { keys: ['linux'], name: 'Linux', text: 'Linux is an open-source operating system used on most servers. Ubuntu is a friendly start.', links: [{ href: 'https://ubuntu.com/download', label: 'Download Ubuntu' }] },
    { keys: ['xampp'], name: 'XAMPP', text: 'XAMPP is a free local server pack: Apache, MySQL/MariaDB, PHP, and Perl. Use it to run PHP sites on your computer before you go live.', links: [{ href: 'https://www.apachefriends.org/download.html', label: 'Download XAMPP' }, { href: 'https://www.apachefriends.org/', label: 'XAMPP website' }] },
    { keys: ['wamp', 'wampserver'], name: 'WampServer', text: 'WampServer is a Windows local stack (Apache, MySQL, PHP), similar to XAMPP.', links: [{ href: 'https://www.wampserver.com/en/', label: 'Download WampServer' }] },
    { keys: ['mamp'], name: 'MAMP', text: 'MAMP is a local server stack, popular on Mac. It runs Apache, MySQL, and PHP on your machine.', links: [{ href: 'https://www.mamp.info/en/downloads/', label: 'Download MAMP' }] },
    { keys: ['laragon'], name: 'Laragon', text: 'Laragon is a fast, portable local server for Windows — PHP, Node, MySQL, and more.', links: [{ href: 'https://laragon.org/download/', label: 'Download Laragon' }] },
    { keys: ['composer'], name: 'Composer', text: 'Composer is the package manager for PHP. It installs libraries your PHP project needs.', links: [{ href: 'https://getcomposer.org/download/', label: 'Download Composer' }] },
    { keys: ['npm'], name: 'npm', text: 'npm comes with Node.js. It installs JavaScript packages. Get it by installing Node.js.', links: [{ href: 'https://nodejs.org/en/download', label: 'Download Node.js (includes npm)' }] },
    { keys: ['yarn'], name: 'Yarn', text: 'Yarn is another JavaScript package manager. Install from the official Yarn site.', links: [{ href: 'https://yarnpkg.com/getting-started/install', label: 'Install Yarn' }] },
    { keys: ['notepad++', 'notepad plus'], name: 'Notepad++', text: 'Notepad++ is a free Windows code editor. Lighter than VS Code; good for quick PHP and text files.', links: [{ href: 'https://notepad-plus-plus.org/downloads/', label: 'Download Notepad++' }] },
    { keys: ['sublime text', 'sublime'], name: 'Sublime Text', text: 'Sublime Text is a fast code editor. You can evaluate it free; a licence is paid.', links: [{ href: 'https://www.sublimetext.com/download', label: 'Download Sublime Text' }] },
    { keys: ['pycharm'], name: 'PyCharm', text: 'PyCharm is JetBrains’ Python IDE. The Community edition is free.', links: [{ href: 'https://www.jetbrains.com/pycharm/download/', label: 'Download PyCharm' }] },
    { keys: ['intellij', 'intelli j'], name: 'IntelliJ IDEA', text: 'IntelliJ IDEA is JetBrains’ Java/Kotlin IDE. Community edition is free.', links: [{ href: 'https://www.jetbrains.com/idea/download/', label: 'Download IntelliJ IDEA' }] },
    { keys: ['eclipse'], name: 'Eclipse', text: 'Eclipse is a free IDE, often used for Java.', links: [{ href: 'https://www.eclipse.org/downloads/', label: 'Download Eclipse' }] },
    { keys: ['mongodb', 'mongo db'], name: 'MongoDB', text: 'MongoDB is a document (NoSQL) database. Install Community Server from mongodb.com.', links: [{ href: 'https://www.mongodb.com/try/download/community', label: 'Download MongoDB' }] },
    { keys: ['redis'], name: 'Redis', text: 'Redis is an in-memory store used for cache and sessions.', links: [{ href: 'https://redis.io/downloads/', label: 'Download Redis' }] },
    { keys: ['filezilla'], name: 'FileZilla', text: 'FileZilla is a free FTP app to upload site files to a server.', links: [{ href: 'https://filezilla-project.org/download.php?type=client', label: 'Download FileZilla' }] },
    { keys: ['putty'], name: 'PuTTY', text: 'PuTTY is a free Windows SSH client for logging into Linux servers.', links: [{ href: 'https://www.putty.org/', label: 'Download PuTTY' }] },
    { keys: ['winscp'], name: 'WinSCP', text: 'WinSCP is a free Windows app for SFTP/SCP file transfer to servers.', links: [{ href: 'https://winscp.net/eng/download.php', label: 'Download WinSCP' }] },
    { keys: ['homebrew', 'brew'], name: 'Homebrew', text: 'Homebrew is the package manager for macOS. Install tools with brew.', links: [{ href: 'https://brew.sh/', label: 'Install Homebrew' }] },
    { keys: ['xcode'], name: 'Xcode', text: 'Xcode is Apple’s IDE for iOS and macOS apps. Get it from the Mac App Store.', links: [{ href: 'https://developer.apple.com/xcode/', label: 'Xcode website' }] },
    { keys: ['mysql workbench'], name: 'MySQL Workbench', text: 'MySQL Workbench is the official visual tool for MySQL databases.', links: [{ href: 'https://dev.mysql.com/downloads/workbench/', label: 'Download MySQL Workbench' }] },
    { keys: ['phpmyadmin'], name: 'phpMyAdmin', text: 'phpMyAdmin is a browser UI for MySQL. It ships inside XAMPP — install XAMPP, then open phpMyAdmin.', links: [{ href: 'https://www.apachefriends.org/download.html', label: 'Download XAMPP (includes phpMyAdmin)' }, { href: 'https://www.phpmyadmin.net/', label: 'phpMyAdmin website' }] },
    { keys: ['apache'], name: 'Apache', text: 'Apache HTTP Server is a common web server. On Windows, the easy path is XAMPP, which includes Apache.', links: [{ href: 'https://httpd.apache.org/download.cgi', label: 'Download Apache' }, { href: 'https://www.apachefriends.org/download.html', label: 'Or get it with XAMPP' }] },
    { keys: ['nginx'], name: 'Nginx', text: 'Nginx is a fast web server and reverse proxy, used a lot in production.', links: [{ href: 'https://nginx.org/en/download.html', label: 'Download Nginx' }] },
    { keys: ['netlify'], name: 'Netlify', text: 'Netlify hosts static sites and frontends. This Code Therapist site can go live there.', links: [{ href: 'https://www.netlify.com/', label: 'Netlify website' }] },
    { keys: ['vercel'], name: 'Vercel', text: 'Vercel hosts Next.js and frontend projects.', links: [{ href: 'https://vercel.com/', label: 'Vercel website' }] },
    { keys: ['ide', 'code editor'], name: 'IDE', text: 'An IDE (or editor) is where you write code. VS Code is the usual start. Visual Studio, PyCharm, and Android Studio are fuller IDEs.', links: [{ href: 'https://code.visualstudio.com/download', label: 'Download VS Code' }] },
    { keys: ['framework'], name: 'Framework', text: 'A framework is a ready structure for building software — React for UI, Flutter for apps, Unity for games, Express for Node APIs.' },
    { keys: ['library', 'libraries'], name: 'Library', text: 'A library is reusable code you import into a project, instead of writing everything from scratch.' },
    { keys: ['variable', 'variables'], name: 'Variable', text: 'A variable stores a value in a program — a name, a number, a list — so you can use it later.' },
    { keys: ['function', 'functions'], name: 'Function', text: 'A function is a named block of code you can run again. You pass in data and get a result.' },
    { keys: ['loop', 'loops', 'for loop', 'while loop'], name: 'Loop', text: 'A loop repeats code until a condition is done — for each item, or while something is true.' },
    { keys: ['object oriented', 'oop', 'class'], name: 'OOP', text: 'Object-oriented programming groups data and behaviour into classes and objects. C#, Java, and PHP all use it.' },
    { keys: ['json'], name: 'JSON', text: 'JSON is a simple text format for data: names and values. APIs and config files use it everywhere.' },
    { keys: ['http', 'https'], name: 'HTTP', text: 'HTTP is how browsers talk to websites. HTTPS is the same, encrypted. That padlock in the address bar is HTTPS.' },
    { keys: ['dns'], name: 'DNS', text: 'DNS turns a name like codetherapist.netlify.app into the server’s IP address.' },
    { keys: ['domain name', 'domain'], name: 'Domain', text: 'A domain is the website name people type — like example.com. You buy it from a registrar, then point DNS at your host.' },
    { keys: ['hosting', 'web hosting'], name: 'Hosting', text: 'Hosting is the computer on the internet that stores your site. Netlify, Vercel, a VPS, or shared hosting are common options.', links: [{ href: 'https://www.netlify.com/', label: 'Netlify' }] },
    { keys: ['compiler'], name: 'Compiler', text: 'A compiler turns source code into something the machine can run. C# and Java are compiled. JavaScript is usually interpreted.' },
    { keys: ['interpreter'], name: 'Interpreter', text: 'An interpreter runs code line by line. Python and PHP typically work this way.' },
    { keys: ['terminal', 'command line', 'cli', 'cmd', 'powershell'], name: 'Terminal', text: 'The terminal (command line) is text commands instead of clicking. Git, npm, Composer, and servers are often used there.' },
    { keys: ['debug', 'debugging'], name: 'Debugging', text: 'Debugging is finding and fixing mistakes in code. VS Code’s debugger and browser DevTools are the usual tools.', links: [{ href: 'https://code.visualstudio.com/docs/editor/debugging', label: 'VS Code debugging docs' }] },
    { keys: ['stack overflow'], name: 'Stack Overflow', text: 'Stack Overflow is a Q&A site for programmers. Search your error there — someone has often seen it.', links: [{ href: 'https://stackoverflow.com/', label: 'Stack Overflow' }] },
    { keys: ['mdn'], name: 'MDN', text: 'MDN Web Docs is the reference for HTML, CSS, and JavaScript.', links: [{ href: 'https://developer.mozilla.org/', label: 'MDN Web Docs' }] },
    { keys: ['w3schools'], name: 'W3Schools', text: 'W3Schools has simple tutorials for HTML, CSS, JS, PHP, and SQL. Good for beginners.', links: [{ href: 'https://www.w3schools.com/', label: 'W3Schools' }] }
  ];

  const OPEN_CHIPS = [
    { label: 'Talk to Peter', q: 'I want to talk to Peter' },
    { label: 'Byte Lab?', q: 'What is Byte Lab?' },
    { label: 'Apps?', q: 'Do you build mobile apps?' },
    { label: 'Hire Peter', q: 'How can I hire Peter?' }
  ];

  function kampalaParts() {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Kampala',
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
      weekday: 'long'
    });
    const parts = Object.fromEntries(fmt.formatToParts(new Date()).map(p => [p.type, p.value]));
    const hour = Number(parts.hour);
    let period = 'evening';
    let hello = 'Good evening';
    if (hour < 12) { period = 'morning'; hello = 'Good morning'; }
    else if (hour < 17) { period = 'afternoon'; hello = 'Good afternoon'; }
    return { hour, minute: parts.minute, weekday: parts.weekday, period, hello };
  }

  function normalize(text) {
    return String(text || '')
      .toLowerCase()
      .replace(/[’']/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    const m = a.length;
    const n = b.length;
    if (!m) return n;
    if (!n) return m;
    const prev = new Array(n + 1);
    const cur = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      cur[0] = i;
      for (let j = 1; j <= n; j++) {
        const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      }
      for (let j = 0; j <= n; j++) prev[j] = cur[j];
    }
    return prev[n];
  }

  const TYPOS = {
    yuo: 'you', yuor: 'your', uoy: 'you', ur: 'your',
    hwo: 'how', hw: 'how', wht: 'what', wat: 'what', wats: 'whats',
    teh: 'the', adn: 'and', taht: 'that', recieve: 'receive',
    weldone: 'well done', welldone: 'well done', welldon: 'well done',
    thx: 'thanks', thanx: 'thanks', pls: 'please', plz: 'please',
    universiy: 'university', univeristy: 'university', studed: 'studied',
    kampalla: 'kampala', internatonal: 'international',
    bytlab: 'byte lab', bytelb: 'byte lab', petre: 'peter', petr: 'peter',
    reccomend: 'recommend', reccomendation: 'recommendation'
  };

  const VOCAB = ['hello', 'peter', 'byte', 'university', 'thanks', 'please', 'today', 'weather', 'kampala', 'uganda', 'python', 'javascript', 'international'];

  const LOCKED = {
    a:1, an:1, the:1, i:1, you:1, he:1, she:1, him:1, her:1, his:1, they:1, we:1, me:1, my:1,
    our:1, your:1, can:1, could:1, would:1, should:1, will:1, to:1, for:1, of:1, in:1, on:1,
    at:1, as:1, is:1, are:1, was:1, were:1, be:1, how:1, what:1, when:1, where:1, why:1, who:1,
    which:1, that:1, this:1, do:1, did:1, have:1, has:1, not:1, no:1, yes:1, ok:1, okay:1,
    want:1, need:1, talk:1, speak:1, call:1, meet:1, please:1, and:1, or:1, with:1, from:1
  };

  function fixToken(w) {
    if (TYPOS[w]) return TYPOS[w];
    if (LOCKED[w] || w.length < 5) return w;
    let best = w;
    let bestD = 99;
    for (let i = 0; i < VOCAB.length; i++) {
      const v = VOCAB[i];
      if (v.length < 5) continue;
      const d = levenshtein(w, v);
      if (d && d === 1 && d < bestD && w[0] === v[0]) {
        bestD = d;
        best = v;
      }
    }
    return best;
  }

  function plain(raw) {
    return normalize(String(raw || '').toLowerCase());
  }

  function understand(raw) {
    let n = String(raw || '')
      .toLowerCase()
      .replace(/c#/g, 'csharp')
      .replace(/\.net/g, 'dotnet')
      .replace(/node\.js/g, 'nodejs');
    n = normalize(n);
    n = n.replace(/\bwell\s*done\b/g, 'well done');
    n = n.replace(/\bweldone\b/g, 'well done');
    n = n.replace(/\bwelldone\b/g, 'well done');
    n = n.split(' ').map(fixToken).join(' ');
    n = n.replace(/\s+/g, ' ').trim();
    return n;
  }

  function lookupIT(n) {
    let best = null;
    let bestLen = 0;
    for (let i = 0; i < IT_KB.length; i++) {
      const item = IT_KB[i];
      for (let k = 0; k < item.keys.length; k++) {
        const key = item.keys[k];
        const esc = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (!new RegExp('\\b' + esc + '\\b').test(n)) continue;
        if (key.length > bestLen) {
          best = item;
          bestLen = key.length;
        }
      }
    }
    return best;
  }

  function mapServiceFollowup(n) {
    if (/\b(website|web site|web app|landing|frontend|web)\b/.test(n)) return ['web'];
    if (/\b(shopify|store|shop|ecommerce|e commerce)\b/.test(n)) return ['shopify'];
    if (/\b(app|apps|mobile|android|ios)\b/.test(n)) return ['mobile'];
    if (/\b(unity|game|games)\b/.test(n)) return ['unity'];
    if (/\b(ai agent|chatbot|automation|ai)\b/.test(n)) return ['ai_work'];
    if (/\b(server|servers|hosting|cloud|vps)\b/.test(n)) return ['servers'];
    if (/\b(security|cyber|protect)\b/.test(n)) return ['security'];
    if (/\b(all|everything|full list|what do you offer|what services)\b/.test(n)) return ['services'];
    return null;
  }

  function isVagueService(n) {
    if (mapServiceFollowup(n)) return false;
    return /\b((i |we )?(want|need|looking for) (a |some |an )?services?|i want (a )?service|need (a )?service|which service|what service do i|can you (do|offer) (a )?service)\b/.test(n)
      || /^(i want a service|i need a service|i want service|service)$/.test(n);
  }

  function mathAnswer(n) {
    let expr = n.replace(/^(what is|whats|what s|calculate|compute|solve)\s+/, '');
    expr = expr.replace(/\s+/g, '');
    if (!expr || expr.length > 40 || !/\d/.test(expr) || !/^[0-9+\-*/().]+$/.test(expr)) return null;
    try {
      const val = Function('"use strict";return (' + expr + ')')();
      if (typeof val === 'number' && isFinite(val)) return String(val);
    } catch (err) {}
    return null;
  }

  function hasAny(n, list) {
    return list.some(w => n.indexOf(w) !== -1);
  }

  function wordHit(n, words) {
    return words.reduce((score, w) => {
      const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
      return score + (re.test(n) ? 1 : 0);
    }, 0);
  }

  function isHarm(n) {
    return /\b(hack(ing)? (into|a|the|someone|his|her|their)|crack (a |the )?(password|account|wifi)|steal (data|accounts)|spy on|track (his|her|their|someone|this person)|root (a |the |my )?phone|ransomware|ddos|exploit|keylogger|unauthorized)\b/.test(n);
  }

  function isPeterWork(n) {
    return /\b(what (does|do) (he|peter|gyagenda|pita|code therapist) do|what is (his|peter'?s) (work|job|role|profession)|his (work|job|role)|what does he (build|make|offer)|what is he (doing|into)|tell me (about )?(his|peter'?s) (work|job)|what (kind of )?work (does he|does peter)|his profession)\b/.test(n);
  }

  function isTalk(n) {
    if (/\b(how (can|do) i (talk|speak|contact|reach|message|call|meet)|talk to (him|her|peter|pita|gyagenda)|contact (him|her|peter)|reach (him|her|peter)|speak (to|with) (him|her|peter))\b/.test(n)) return true;
    const reach = /\b(talk|speak|contact|reach|message|chat|call|meet|whatsapp|email|gmail|dm|text)\b/.test(n);
    const who = /\b(peter|pita|gyagenda|him|her|byte ?lab|bytelab|the team|code therapist|your (boss|founder|people))\b/.test(n);
    const want = /\b(i want to|how (can|do) i|where (can|do) i|let me|connect me|put me through)\b/.test(n);
    return (reach && who) || (want && who && reach);
  }

  function detect(raw) {
    const n = understand(raw);
    const p = plain(raw);
    if (!n) return ['empty'];
    if (isHarm(n) || isHarm(p)) return ['refuse_harm'];
    if (hasAny(n, ['wordpress', 'word press']) || hasAny(p, ['wordpress', 'word press'])) return ['no_wordpress'];
    if (isTalk(p) || isTalk(n)) return ['talk'];
    if (isPeterWork(p) || isPeterWork(n)) return ['who_peter'];
    if (mathAnswer(n)) return ['math'];
    if (isVagueService(n) || isVagueService(p)) return ['need_service'];
    const itHit = lookupIT(n) || lookupIT(p);
    if (itHit && !/\b(peter|gyagenda|byte lab|bytelab)\b/.test(p)) return ['it_kb'];
    if (/\b(download|install|get|official (site|link)|where (can|do) i (get|download|install|find))\b/.test(p) && !itHit) return ['need_download'];
    const specified = mapServiceFollowup(p) || mapServiceFollowup(n);
    if (specified && /\b(want|need|looking|build me|make me|i need|can you (build|make|do))\b/.test(p)) return specified;

    const compact = n.replace(/\s+/g, '');
    const scores = {
      greeting: 0,
      how_are: 0,
      praise: 0,
      who_ai: 0,
      who_peter: 0,
      bytelab: 0,
      platforms: 0,
      quality: 0,
      education: 0,
      cv: 0,
      shopify: 0,
      mobile: 0,
      unity: 0,
      ai_work: 0,
      servers: 0,
      security: 0,
      projects: 0,
      hire: 0,
      contact: 0,
      timeline: 0,
      location: 0,
      time: 0,
      date: 0,
      weather: 0,
      joke: 0,
      live: 0,
      thanks: 0,
      bye: 0,
      services: 0,
      help: 0,
      life: 0
    };

    if (/\b(how are (you|u)|how r (you|u)|howre you|howve you been|how is it going|hows it going|you good|you okay|you ok|how do you do)\b/.test(n) || compact === 'howareyou' || compact === 'howru') {
      scores.how_are += 6;
    }
    if (/\b(hi+|hii+|hello+|hey+|yo|howdy|hola|sup|wassup|whatsup|whats up|what s up|whatup|morning|afternoon|evening|good (morning|afternoon|evening|day|night))\b/.test(n)) {
      scores.greeting += 4;
    }
    if (/\b(well done|good job|great job|nice work|good work|bravo|kudos|congrats|congratulations|impressive|you did well|well played)\b/.test(n) || compact.indexOf('weldone') !== -1 || compact.indexOf('welldone') !== -1) {
      scores.praise += 7;
    }
    if (/\b(what time|the time|time is it|kampala time|current time|tell (me )?the time)\b/.test(n) || n === 'time') scores.time += 6;
    if (/\b(what(s| is)? the date|date today|today s date|what day|which day|day is it)\b/.test(n) || n === 'date' || n === 'today') scores.date += 6;
    if (/\b(weather|rain|raining|hot today|cold today|climate|temperature)\b/.test(n)) scores.weather += 5;
    if (/\b(joke|funny|make me laugh|tell me a joke)\b/.test(n)) scores.joke += 6;
    if (/\b(are you (real|alive|live|human|an ai|a bot)|live ai|real ai|do you think)\b/.test(n)) scores.live += 5;
    if (/\b(thank|thanks|thx|appreciate)\b/.test(n)) scores.thanks += 3;
    if (/\b(bye|goodbye|see you|later|that s all|thats all)\b/.test(n)) scores.bye += 3;

    scores.who_ai += wordHit(n, ['byte ai', 'your name', 'who are you', 'what are you', 'are you ai', 'are you a bot', 'assistant', 'chatbot']);
    if (n.includes('byteai') || n.includes('byte ai')) scores.who_ai += 3;
    if (/\b(who are you|what are you|your name|who r you|who r u|whats your name|what is your name|are you (ai|a bot|human|real))\b/.test(n)) scores.who_ai += 4;

    if (/\b(who is (he|peter|gyagenda|pita)|tell me about (him|peter)|about peter|code therapist|founder|what does (he|peter) do|his work)\b/.test(p) || /\b(who is (he|peter|gyagenda)|tell me about peter|about peter|code therapist|founder)\b/.test(n)) scores.who_peter += 5;
    scores.who_peter += wordHit(p, ['peter', 'gyagenda', 'pita', 'code therapist']);
    if (/\b(he|him|his)\b/.test(p) && /\b(do|does|work|job|build|who|about)\b/.test(p)) scores.who_peter += 5;

    scores.bytelab += wordHit(n, ['byte lab', 'bytelab', 'bytelabug', 'beyond code', 'company', 'studio']);
    if (/\b(byte ?lab|your company|the company)\b/.test(n)) scores.bytelab += 3;

    if (/\b(where (can|do) i (find|see|follow) (you|peter|byte)|your (socials|platforms|github|linkedin)|byte lab (on|social|github|linkedin)|find byte lab)\b/.test(n)) scores.platforms += 5;
    if (hasAny(n, ['byte lab social', 'where is byte lab'])) scores.platforms += 4;

    if (/\b(how good|is (it|byte lab|he) good|reviews?|quality|reliable|legit|worth it|best|excellent|trusted)\b/.test(n)) scores.quality += 4;

    if (/\b(stud(y|ied|ies|ying)|school|university|college|education|degree|graduate|graduated|where did .+ study|where (does|did|is) (he|peter) study|where (was|is) peter (taught|trained))\b/.test(p)) scores.education += 7;
    if (/\b(kiu|kampala international|kansanga campus|ggaba road|princeton)\b/.test(n)) scores.education += 9;
    if (/\b(3\s*[:./]\s*2|year\s*3|third year|semester\s*2)\b/.test(n)) scores.education += 6;
    if (/\b(cv|resume|curriculum|portfolio pdf|download (the )?cv)\b/.test(p)) scores.cv += 7;

    scores.shopify += wordHit(n, ['shopify', 'store', 'ecommerce', 'e commerce', 'online shop']);
    scores.mobile += wordHit(n, ['mobile', 'android', 'ios', 'app', 'apps', 'application', 'flutter', 'react native']);
    scores.unity += wordHit(n, ['unity', 'game', 'games', 'csharp', 'playnova']);
    scores.ai_work += wordHit(n, ['ai agent', 'ai agents', 'automation', 'mcbrain', 'machine learning']);
    scores.servers += wordHit(n, ['server', 'servers', 'hosting', 'devops', 'linux', 'vps', 'cloud', 'manage servers']);
    scores.security += wordHit(n, ['cyber', 'cybersecurity', 'security', 'secure', 'device security', 'protect', 'compromised', 'malware']);
    scores.projects += wordHit(n, ['project', 'projects', 'portfolio', 'examples', 'your work']);
    scores.hire += wordHit(n, ['hire', 'hiring', 'price', 'pricing', 'cost', 'quote', 'budget', 'available', 'work with']);
    scores.contact += wordHit(n, ['email', 'gmail', 'whatsapp', 'instagram', 'telegram', 'tiktok', 'linkedin', 'contact', 'form']);
    scores.timeline += wordHit(n, ['timeline', 'how long', 'duration', 'weeks', 'deadline']);
    scores.location += wordHit(n, ['kampala', 'uganda', 'where', 'location', 'based']);
    if (/\b(what (do you do|services|do you offer)|your services|list (your )?services)\b/.test(n)) scores.services += 6;
    scores.help += wordHit(n, ['what can you']);

    if (/\b(i need help|can you help( me)?|help me)\b/.test(n) && !mapServiceFollowup(n) && !lookupIT(n)) scores.need_service += 5;
    if (/\b(who (made|built|created) you|favourite colour|favorite color|capital of|what is love|i am (tired|bored|hungry|sad|happy)|good night|ok|okay|yes|no|sure|maybe|tell me something)\b/.test(n)) {
      scores.life += 4;
    }

    if (hasAny(n, ['shopify'])) scores.shopify += 3;
    if (hasAny(n, ['mobile app', 'android', 'ios'])) scores.mobile += 3;
    if (hasAny(n, ['unity'])) scores.unity += 3;
    if (hasAny(n, ['hire me', 'hire peter'])) scores.hire += 4;
    if (hasAny(n, ['whatsapp', 'email', 'gmail', 'form'])) scores.contact += 3;

    const ranked = Object.entries(scores)
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1]);

    if (!ranked.length) return ['life'];

    if (ranked[0][0] === 'who_peter' && scores.contact >= 3) return ['talk'];
    if (scores.praise >= 6) return ['praise'];
    if (scores.how_are >= 6) return ['how_are'];
    if (scores.need_service >= 5) return ['need_service'];
    if (scores.education >= 6 || scores.cv >= 6) {
      const pack = [];
      if (scores.education >= 6) pack.push('education');
      if (scores.cv >= 6) pack.push('cv');
      if (!pack.includes('cv')) pack.push('cv');
      return pack;
    }

    const top = ranked.filter(([, v], i) => i === 0 || (v >= 3 && v >= ranked[0][1] - 1)).map(([k]) => k);
    return top.slice(0, 2);
  }

  function gist(raw) {
    const clean = String(raw || '').replace(/\s+/g, ' ').trim();
    if (clean.length < 48) return clean;
    return clean.slice(0, 46) + '…';
  }

  function lifeLine(n) {
    if (/\b(who (made|built|created) you)\b/.test(n)) return 'Peter built me. I am Byte Ai, the live assistant for Byte Lab.';
    if (/\b(favourite colour|favorite color)\b/.test(n)) return 'Forest green — the Byte Lab colour. It sits on black the way this site does.';
    if (/\bcapital of uganda\b/.test(n)) return 'Kampala is the capital of Uganda, and that is Byte Lab’s home.';
    if (/\bcapital of kenya\b/.test(n)) return 'Nairobi is the capital of Kenya.';
    if (/\bcapital of tanzania\b/.test(n)) return 'Dodoma is the capital of Tanzania. Dar es Salaam is the largest city.';
    if (/\bwhat is love\b/.test(n)) return 'Love is care in action. In work, it looks like shipping something that actually helps someone.';
    if (/\bi am tired\b/.test(n)) return 'Rest if you can. A short break, water, and then one small next step is enough.';
    if (/\bi am bored\b/.test(n)) return 'Ask me the time, a joke, about Byte Lab, or Peter’s CV — I will keep you company.';
    if (/\bi am hungry\b/.test(n)) return 'Eat something proper if you can. Kampala has good food on every corner — then come back and we can talk work.';
    if (/\bi am sad\b/.test(n)) return 'I am sorry you feel low. I am here. If you want a project or a chat with Peter, I can help with that too.';
    if (/\bi am happy\b/.test(n)) return 'That is good to hear. Well done. What would you like to talk about?';
    if (/\bgood night\b/.test(n)) return 'Good night. Sleep well. Byte Ai will be here in the morning.';
    if (/^(ok|okay|yes|sure|yeah|yep)$/.test(n)) return 'Alright. I am listening — send the next thing.';
    if (/^(no|nope|nah)$/.test(n)) return 'No problem. Tell me what you would rather talk about.';
    if (/\btell me something\b/.test(n)) return 'Byte Lab’s line is Beyond Code. Peter builds from Kampala for clients at home and abroad — apps, sites, AI, servers, and security.';
    if (/\bhow (do i|to) learn (code|coding|programming)\b/.test(n)) return 'Start small: HTML, then JavaScript or Python, build one real thing, and repeat. Peter’s work on this site is a good example of shipping, not only studying.';
    if (/\bwhat is ai\b/.test(n)) return 'AI is software that can recognise patterns and respond. I am Byte Ai — a live assistant on this site, trained on Byte Lab and everyday chat.';
    if (/\bwho is the president of uganda\b/.test(n)) return 'Uganda’s long-serving president is Yoweri Museveni. For live politics, check a news site — I stay focused on Byte Lab and helpful chat.';
    return '';
  }

  function bubblesFor(intents, raw) {
    const t = kampalaParts();
    const n = understand(raw);
    const out = [];
    const used = new Set(intents);

    function add(text, links, photos, logos) {
      if (!text && !(links && links.length) && !(photos && photos.length) && !(logos && logos.length)) return;
      out.push({ text: text || '', links: links, photos: photos, logos: logos });
    }

    if (used.has('empty')) {
      add('Type anything — a greeting, the time, Byte Lab, Peter’s studies, or Hire Peter.');
      return out;
    }

    if (used.has('refuse_harm')) {
      add('I understand you want help with hacking, tracking, or getting into a device. Byte Ai cannot help with that.');
      add('Byte Lab does defensive security: protecting phones, servers, and accounts. For a real security review, talk to Peter.');
      add('', REACH);
      return out;
    }

    if (used.has('no_wordpress')) {
      add('I understand you asked about that platform. Byte Lab does not talk WordPress here. We build custom sites, mobile apps, AI agents, servers, and security work.');
      add('Tap below to see the work or reach Peter.');
      add('', [LINKS.projects, LINKS.whatsapp, LINKS.form]);
      return out;
    }

    if (used.has('math')) {
      add('I understood that. The answer is ' + mathAnswer(n) + '.');
      return out;
    }

    if (used.has('praise')) {
      add('Thank you — I appreciate that.');
      return out;
    }

    if (used.has('how_are')) {
      add('I am well, thank you for asking. How can I help you today?');
      return out;
    }

    if (used.has('talk') || (used.has('contact') && !used.has('education') && !used.has('cv'))) {
      add('You can reach Gyagenda Peter K directly. WhatsApp is fastest; you may also email or send the form on this site.');
      add('', REACH);
      add('He usually replies within 24 hours.');
      return out;
    }

    if (used.has('need_service')) {
      add('I can help. Byte Lab works in IT — websites, apps, stores, AI, servers, and security.');
      add('Which of those would you like? If you need a tool instead, say so — for example “download VS Code”.');
      return out;
    }

    if (used.has('need_download')) {
      add('Tell me the tool and I will send the official page. Examples: VS Code, XAMPP, Git, Python, Node.js, Android Studio, Unity, Docker, FileZilla, PuTTY.');
      return out;
    }

    if (used.has('it_kb')) {
      const item = lookupIT(n) || lookupIT(plain(raw));
      if (item) {
        const askingWhere = /\b(where|download|install|get|official|link)\b/.test(plain(raw) + ' ' + n);
        if (askingWhere && item.links && item.links.length) {
          add('Use the official site for ' + item.name + ':', item.links, null, logosFor(item));
          add(item.text);
        } else {
          add(item.text, item.links, null, logosFor(item));
        }
      }
      return out;
    }

    if (used.has('web')) {
      add('A website — understood. Byte Lab builds landing pages, business sites, and web apps.');
      add('Is this for a business, a personal brand, or a product? Tell me that and I can point you to Peter to start.');
      add('', [LINKS.whatsapp, LINKS.form, LINKS.projects]);
    }

    if (used.has('greeting')) {
      add(t.hello + '. How can I help you today?');
    }

    if (used.has('time')) {
      add('Right now in Kampala it is ' + t.weekday + ', ' + String(t.hour).padStart(2, '0') + ':' + t.minute + ' — ' + t.period + ' here.');
    }

    if (used.has('date')) {
      const full = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Kampala',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(new Date());
      add('Today in Kampala is ' + full + '.');
    }

    if (used.has('weather')) {
      add('I do not have a live weather feed, but Kampala is tropical: warm most days, with rainy seasons around March–May and September–November. Check a weather app for this hour.');
    }

    if (used.has('joke')) {
      add('Why did the developer go broke? Because he used up all his cache.');
      add('Want another, or shall we talk Byte Lab?');
    }

    if (used.has('live')) {
      add('Yes — I am Byte Ai, Byte Lab’s live assistant. I read what you type, I answer in this chat, and I type back like a real conversation.');
    }

    if (used.has('who_ai') && !used.has('how_are')) {
      add('I am Byte Ai, Byte Lab’s main assistant. I chat live about Peter, the company, apps, AI agents, servers, security, studies, and everyday questions. Loose spelling is fine.');
    }

    if (used.has('who_peter') && !used.has('talk') && !used.has('education')) {
      add('Gyagenda Peter K — Code Therapist — is a creative developer and the founder of Byte Lab in Kampala.', null, nextPeterPhotos());
      add('His work is IT: websites, mobile apps, Shopify stores, custom systems, AI agents, servers, and defensive security.');
      add('', [LINKS.projects, LINKS.skills]);
    }

    if (used.has('education')) {
      add('Peter is a local Computer Science student at Kampala International University (KIU) in Kansanga, Kampala. He is also an online student at Princeton University.');
      add('KIU’s main campus is on Ggaba Road, Kansanga. Official sites are linked below. For the full background, skills, and experience, download his CV.');
      add('', STUDY);
    }

    if (used.has('cv') && !used.has('education')) {
      add('Peter’s CV is on this site. You can download the PDF or open the CV page.');
      add('', [LINKS.cv, LINKS.cvPage]);
    }

    if (used.has('platforms')) {
      add('You can find Byte Lab and Peter on this website, LinkedIn, GitHub, X, and WhatsApp. Byte Lab is also known as ByteLabUg. Tagline: Beyond Code.');
      add('', PLATFORMS);
    }

    if (used.has('quality')) {
      add('Byte Lab is Peter’s company — small, hands-on, and serious about delivery. Clients come for clean sites, Shopify stores, apps, AI, servers, and security, with replies usually inside 24 hours.');
      add('The work on this site is the proof. If you want a straight talk, message Peter.');
      add('', [LINKS.projects, LINKS.whatsapp]);
    }

    if (used.has('bytelab') && !used.has('platforms') && !used.has('quality')) {
      add('Byte Lab (ByteLabUg) is Peter’s company in Kampala. Tagline: Beyond Code. We ship apps, platforms, AI agents, servers, and security — coded by Peter.');
      add('Find Byte Lab here:');
      add('', [LINKS.bytelab, LINKS.site, LINKS.linkedin, LINKS.github]);
    }

    if (used.has('shopify')) {
      add('Yes — Shopify stores are part of the work: Beauty by Amani, VYSN Fashion, Fashion Flare Boutique, Hello Tushy, JFA Cosmetics, and Grunt Style.');
      add('', [LINKS.projects]);
    }

    if (used.has('mobile')) {
      add('Yes. Byte Lab builds mobile applications — Android, iOS-style products, and app-ready backends. PlayNova is one public example. Tell Peter the idea and he will scope it.');
      add('', [LINKS.whatsapp, LINKS.form]);
    }

    if (used.has('unity')) {
      add('Peter builds in C# and Unity for games and interactive systems. See PlayNova and the Board Gaming site on this page.');
      add('', [LINKS.projects]);
    }

    if (used.has('ai_work')) {
      add('Byte Lab ships AI agents and automation. Byte Ai is the assistant on this site. On other Byte Lab systems the same AI line can do more.');
    }

    if (used.has('servers')) {
      add('Yes — Byte Lab sets up, controls, and manages servers: hosting, Linux, cloud, and keeping products online. Message Peter with what you need running.');
      add('', [LINKS.whatsapp, LINKS.form]);
    }

    if (used.has('security')) {
      add('Byte Lab does defensive cybersecurity: hardening devices, reviewing if a phone or server looks compromised, and locking down accounts. We do not hack people or track someone without a lawful brief.');
      add('If you need a security review, talk to Peter.');
      add('', [LINKS.whatsapp, LINKS.form]);
    }

    if (used.has('projects') && !used.has('shopify') && !used.has('unity')) {
      add('Work on this site includes custom frontend, Shopify stores, and landing / product sites — Furniro, Ruqy, Beauty by Amani, SPYLT, PlayNova, and more.');
      add('', [LINKS.projects]);
    }

    if (used.has('services')) {
      add('Here is the IT work Byte Lab takes on: websites, mobile apps, Shopify stores, custom systems, AI agents, servers, and defensive security.');
      add('Which of those do you want to talk about?');
      add('', [LINKS.skills, LINKS.projects]);
    }

    if (used.has('timeline')) {
      add('A typical site is about 1–3 weeks. Apps, servers, and security work depend on scope. Peter confirms after he sees the brief.');
    }

    if (used.has('location') && !used.has('education')) {
      add('Byte Lab is in Kampala, Uganda. Peter works with clients across East Africa and remotely worldwide.');
    }

    if (used.has('hire')) {
      add('To hire Peter, tap WhatsApp or send Gmail through the site form. Replies are usually within 24 hours.');
      add('', REACH);
    }

    if (used.has('thanks')) {
      add('You are welcome.');
    }

    if (used.has('bye')) {
      add('Take care. Byte Ai is here when you come back.');
    }

    if (used.has('help') && out.length < 2) {
      add('I can help with Peter, Byte Lab, mobile apps, AI agents, servers, security, studies, the CV, the time, and everyday chat.');
    }

    if (used.has('life') || !out.length) {
      const extra = lifeLine(n) || lifeLine(plain(raw));
      if (extra) add(extra);
      else {
        add('I may not have a complete answer for that yet. If you add a little more detail, I can help with Byte Lab, Peter, IT tools, or how to get in touch.');
      }
    }

    return out.slice(0, 4);
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function avatarNode(cls) {
    const av = el('div', cls);
    const img = document.createElement('img');
    img.src = AVATAR;
    img.alt = 'Byte Ai';
    av.appendChild(img);
    return av;
  }

  function scrollThread() {
    thread.scrollTop = thread.scrollHeight;
  }

  function reduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function typeText(node, text) {
    return new Promise(resolve => {
      if (!text) {
        resolve();
        return;
      }
      if (reduceMotion()) {
        node.textContent = text;
        resolve();
        return;
      }
      node.textContent = '';
      node.classList.add('is-typing');
      let i = 0;
      const pace = text.length > 180 ? 11 : 18;
      function step() {
        i += 1;
        node.textContent = text.slice(0, i);
        scrollThread();
        if (i >= text.length) {
          node.classList.remove('is-typing');
          resolve();
          return;
        }
        const ch = text.charAt(i - 1);
        let ms = pace + Math.random() * 12;
        if ('.!?'.indexOf(ch) !== -1) ms = 110 + Math.random() * 50;
        else if (',;:'.indexOf(ch) !== -1) ms = 50;
        else if (ch === ' ') ms = 10;
        setTimeout(step, ms);
      }
      step();
    });
  }

  function attachLinks(bubble, links) {
    const wrap = el('div', 'ba-links ba-links-in');
    links.forEach(item => {
      const a = document.createElement('a');
      a.className = 'ba-link';
      a.textContent = item.label;
      a.href = item.href;
      if (item.jump) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(item.href);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      } else if (item.download) {
        a.setAttribute('download', item.downloadName || 'Gyagenda-Peter-K-CV-Code-Therapist.pdf');
      } else if (item.href.charAt(0) !== '#') {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      wrap.appendChild(a);
    });
    bubble.appendChild(wrap);
    scrollThread();
  }

  function addUser(text) {
    const row = el('div', 'ba-row ba-user ba-row-in');
    const bubble = el('div', 'ba-bubble');
    bubble.appendChild(el('p', 'ba-copy', text));
    row.appendChild(bubble);
    thread.appendChild(row);
    scrollThread();
  }

  async function addAiLive(payload) {
    const row = el('div', 'ba-row ba-ai ba-row-in');
    row.appendChild(avatarNode('ba-mini-av'));
    const bubble = el('div', 'ba-bubble');
    const text = typeof payload === 'string' ? payload : (payload && payload.text) || '';
    const links = payload && payload.links;
    const photos = payload && payload.photos;
    const logos = payload && payload.logos;
    let p = null;
    if (text) {
      p = el('p', 'ba-copy');
      bubble.appendChild(p);
    }
    row.appendChild(bubble);
    thread.appendChild(row);
    scrollThread();
    if (p) await typeText(p, text);
    if (photos && photos.length) {
      const grid = el('div', 'ba-photos' + (photos.length === 1 ? ' one' : ''));
      photos.forEach(item => {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || 'Gyagenda Peter K';
        img.loading = 'lazy';
        grid.appendChild(img);
      });
      bubble.appendChild(grid);
    }
    if (logos && logos.length) {
      const wrap = el('div', 'ba-logos');
      logos.forEach(item => {
        const card = el('div', 'ba-logo-card');
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || '';
        img.onerror = function () { card.style.display = 'none'; };
        card.appendChild(img);
        wrap.appendChild(card);
      });
      bubble.appendChild(wrap);
    }
    if (links && links.length) attachLinks(bubble, links);
    scrollThread();
  }

  function typingOn() {
    const row = el('div', 'ba-row ba-ai ba-typing-row ba-row-in');
    row.id = 'byteAiTyping';
    row.appendChild(avatarNode('ba-mini-av'));
    const dots = el('div', 'ba-bubble ba-dots');
    dots.innerHTML = '<span></span><span></span><span></span>';
    row.appendChild(dots);
    thread.appendChild(row);
    scrollThread();
  }

  function typingOff() {
    const row = document.getElementById('byteAiTyping');
    if (row) row.remove();
  }

  let answering = false;
  async function answer(text) {
    if (answering) return;
    answering = true;
    addUser(text);
    typingOn();
    const n = understand(text);
    let intents;
    if (memory.awaiting === 'service_kind') {
      if (isTalk(plain(text)) || isTalk(n)) {
        memory.awaiting = null;
        intents = ['talk'];
      } else if (isPeterWork(plain(text)) || isPeterWork(n)) {
        memory.awaiting = null;
        intents = ['who_peter'];
      } else {
      const follow = mapServiceFollowup(n) || mapServiceFollowup(plain(text));
      if (follow) {
        memory.awaiting = null;
        intents = follow;
      } else if (lookupIT(n)) {
        memory.awaiting = null;
        intents = ['it_kb'];
      } else if (/\b(bye|nothing|never mind|cancel)\b/.test(n)) {
        memory.awaiting = null;
        intents = detect(text);
      } else {
        intents = ['need_service'];
      }
      }
    } else {
      intents = detect(text);
    }
    if (intents[0] === 'need_service') memory.awaiting = 'service_kind';
    if (intents.indexOf('bye') !== -1) memory.awaiting = null;
    const bubbles = bubblesFor(intents, text);
    const think = Math.min(1050, 420 + String(text).length * 9);
    await sleep(think);
    typingOff();
    for (let i = 0; i < bubbles.length; i++) {
      await addAiLive(bubbles[i]);
      if (i < bubbles.length - 1) await sleep(160);
    }
    answering = false;
  }

  function renderChips(items) {
    chipsWrap.innerHTML = '';
    items.forEach(chip => {
      const btn = el('button', 'ba-chip', chip.label);
      btn.type = 'button';
      btn.addEventListener('click', () => answer(chip.q));
      chipsWrap.appendChild(btn);
    });
  }

  function openPanel() {
    root.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (!thread.dataset.greeted) {
      thread.dataset.greeted = '1';
      answering = true;
      const t = kampalaParts();
      (async function greet() {
        await sleep(420);
        typingOn();
        await sleep(520);
        typingOff();
        await addAiLive(t.hello + '. I am Byte Ai, the assistant for Byte Lab.');
        await sleep(180);
        await addAiLive({
          text: 'How can I help you today? You can ask about our work, IT tools, or how to reach Peter.',
          links: [LINKS.whatsapp, LINKS.form]
        });
        answering = false;
      })();
    }
    setTimeout(() => input && input.focus(), 480);
  }

  function closePanel() {
    root.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    root.classList.contains('is-open') ? closePanel() : openPanel();
  });
  if (closeBtn) closeBtn.addEventListener('click', closePanel);

  form.addEventListener('submit', e => {
    e.preventDefault();
    const val = (input.value || '').trim();
    if (!val) return;
    input.value = '';
    answer(val);
  });

  const panel = document.getElementById('byteAiPanel');
  const SKINS = ['forest', 'aurora', 'premium', 'midnight'];
  function applySkin(name) {
    const skin = SKINS.indexOf(name) !== -1 ? name : 'forest';
    if (panel) panel.setAttribute('data-ba-skin', skin);
    try { localStorage.setItem('ba-skin', skin); } catch (err) {}
    document.querySelectorAll('.ba-skin').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-skin') === skin ? 'true' : 'false');
    });
  }
  document.querySelectorAll('.ba-skin').forEach(btn => {
    btn.addEventListener('click', () => applySkin(btn.getAttribute('data-skin')));
  });
  let saved = 'forest';
  try { saved = localStorage.getItem('ba-skin') || 'forest'; } catch (err) {}
  applySkin(saved);

  window.addEventListener('ct-theme', function (e) {
    const t = e.detail && e.detail.theme;
    if (SKINS.indexOf(t) !== -1) applySkin(t);
    else applySkin('forest');
  });

  renderChips(OPEN_CHIPS);
})();
