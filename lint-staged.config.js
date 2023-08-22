module.exports = {
    "backend/**/*.js": [
        "eslint backend/.eslintrc.cjs --fix"
    ],
    "frontend/**/*.{js,jsx}": [
        "eslint -c frontend/.eslintrc.cjs --fix"
    ]
}
