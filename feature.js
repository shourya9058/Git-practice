// 🔥 Git & Node.js Practice Notes (Day 1) 🚀
// 1️⃣ Git Repository Setup
// ✅ Git repo initialize karna:


// git init
// (Yeh command ek naya Git repo banati hai uss folder ke andar.)

// ✅ Check karne ke liye ki repo bana ya nahi:


// git status
// (Ye bataayega ki kaunse files staged ya untracked hain.)

// 2️⃣ Staging & Committing Changes
// ✅ File ko staging area me add karna:


// git add <file-name>  
// (Agar saari files add karni ho toh git add . use kar sakte ho.)

// ✅ Commit karna (final save version create karna):


// git commit -m "First commit"
// (-m ka matlab hai message dena jo bataye commit me kya changes hain.)

// 3️⃣ GitHub se Link & Push
// ✅ Remote repo add karna:


// git remote add origin <GitHub-repo-link>
// (Yeh tumhare local repo ko GitHub se connect karta hai.)

// ✅ Branch push karna GitHub pe:


// git push -u origin main
// (-u ka matlab hai default upstream set karna, taaki aage sirf git push se kaam ho jaye.)

// 4️⃣ Branching & Merging
// ✅ Naya branch create aur switch karna:


// git checkout -b feature-branch
// (Branching ka use alagsi kaam karne ke liye hota hai bina main ko affect kiye.)

// ✅ Main branch pe merge karna:


// git checkout main  
// git merge feature-branch
// (Yeh feature branch ke changes main branch me add kar deta hai.)

// 5️⃣ Git Ignore File
// ✅ Unwanted files ko ignore karne ke liye .gitignore banayein:


// echo "node_modules/" > .gitignore
// (Agar .gitignore me node_modules/ likh diya, toh wo Git me track nahi hoga.)

// 6️⃣ Git Pull & Fixing Push Errors
// ✅ Agar push error aaye ("Updates were rejected"), toh pehle pull karo:


// git pull origin main --rebase
// (Yeh remote changes ko merge karke tumhare commits ke upar rakhta hai.)

// ✅ Agar fir bhi error aaye toh force push kar sakte ho (carefully!):


// git push -f origin main
// (Yeh tumhare local commits ko remote pe overwrite kar dega.)