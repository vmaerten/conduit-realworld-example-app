module.exports = {
    "backend/**/*.js": [
        "eslint -c backend/.eslintrc.cjs --fix"
    ],
    "frontend/**/*.{js,jsx}": [
        "eslint -c frontend/.eslintrc.cjs --fix"
    ]
}
