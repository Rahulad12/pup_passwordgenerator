# Password Generator

A simple and secure password generator that allows users to create strong passwords with customizable options.

## Features

- Generate passwords with a mix of uppercase, lowercase, numbers, and symbols.
- Adjustable password length.
- Copy password to clipboard.
- Refresh button to generate a new password instantly.
- Password strength indicator.

## Setup & Installation

### Prerequisites

Ensure you have a modern web browser installed.

### Installation Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Rahulad12/amnilInternshipAssignment.git
   ```
2. Navigate to the project directory:
   ```sh
   cd project
   ```
   ```sh
   cd passwordGenerator
   ```
3. Install The Package
   ```sh
   npm install
   ```
4. Start
   ```sh
   npm run dev
   ```

## Usage

- Adjust the length of the password using the slider.
- Select desired character options (uppercase, lowercase, numbers, symbols).
- Copy the generated password using the copy button.
- Refresh the password with the refresh button.

## Password Strength Criteria

| Strength Level  | Criteria                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------ |
| **Weak**        | At least 6 characters, but missing uppercase, numbers, or symbols or lowercase                               |
| **Average**     | At least 6 characters, include uppercase,lowercase,number,symbol ,at least two character domain              |
| **Medium**      | At least 8 characters, includes uppercase, lowercase, and numbers , at least two character domain            |
| **Strong**      | At least 8 characters, includes uppercase, lowercase, numbers, and symbols , at least three character domain |
| **Very Strong** | 12+ characters with a mix of all character types                                                             |

## License

This project is open-source and available under the MIT License.

## Developer

<a href ="https://adhikarirahul.com.np">Rahul Adhikari </a>
