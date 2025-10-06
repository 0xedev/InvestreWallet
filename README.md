# InvestreWallet

A modern, secure crypto wallet application built with React, TypeScript, and Vite. InvestreWallet integrates with Reown (formerly WalletConnect) to provide seamless and secure connections to decentralized applications (dApps) and blockchain networks.

## Features

- **Secure Wallet Connections**: Connect to popular crypto wallets using Reown's advanced protocol
- **Multi-Chain Support**: Support for Ethereum, Polygon, and other EVM-compatible networks
- **User-Friendly Interface**: Clean, intuitive UI for managing assets and transactions
- **Real-Time Updates**: Live balance and transaction monitoring
- **Cross-Platform Compatibility**: Works on desktop and mobile devices

## Migration to Reown

This project has been updated to use Reown, the rebranded and improved version of WalletConnect. Reown offers enhanced security, better performance, and more robust connection protocols compared to the legacy WalletConnect implementation.

### Migration Benefits:

- Improved connection stability
- Enhanced security features
- Better developer experience
- Support for latest wallet standards

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Wallet Integration**: Reown (WalletConnect)
- **Linting**: ESLint with TypeScript support

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/0xedev/InvestreWallet.git
   cd InvestreWallet
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Launch the application
2. Click "Connect Wallet" to establish a connection via Reown
3. Scan the QR code with your preferred wallet app
4. Start managing your crypto assets securely

## Build for Production

```bash
npm run build
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### ESLint Configuration

This project uses ESLint for code quality. The configuration includes:

- TypeScript support
- React-specific rules
- Type-aware linting

To enable stricter type checking, update `eslint.config.js` as shown in the original template documentation.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Disclaimer

InvestreWallet is a development project. Always verify transactions and use at your own risk. Never share your private keys or seed phrases.
