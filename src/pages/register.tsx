import { useState } from 'react';
import Layout from '../app/layout';

const Register = () => {
    // Definindo estados para os campos do formulário
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    // função para lidar com o envio do formulário de cadastro
    const handleRegisterSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            console.log('As senhas não coincidem');
            return;
        }
        if (!acceptedTerms) {
            console.log('Você precisa aceitar os termos e a política de privacidade');
            return;
        }
        // adicionar a lógica para enviar os dados para o back-end
        console.log('Dados do formulário de cadastro:', { firstName, lastName, email, password });
    };

    return (
        <Layout>
            <title>Cadastre-se - Pra Quem Faz</title>
            <div className="min-h-screen flex items-center justify-center">
                <div className="p-6 rounded-lg w-full max-w-md bg-[#2B2B2B] text-[#FFFFFF] shadow-md mt-24 mb-10 mx-10">
                    <h1 className="text-3xl text-center font-bold mb-5 ml-2">Cadastre-se</h1>

                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                        {/* campos de cadastro */}
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="mb-1 ml-2">Nome</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                className="bg-gray-200 text-gray-800 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
                                required 
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="mb-1 ml-2">Sobrenome</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                                className="bg-gray-200 text-gray-800 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
                                required 
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 ml-2">E-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="bg-gray-200 text-gray-800 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
                                required 
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 ml-2">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="bg-gray-200 text-gray-800 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
                                required 
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="confirmPassword" className="mb-1 ml-2">Confirmar Senha</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                className="bg-gray-200 text-gray-800 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
                                required 
                            />
                        </div>

                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="acceptTerms" 
                                checked={acceptedTerms} 
                                onChange={(e) => setAcceptedTerms(e.target.checked)} 
                                className="mr-2" 
                            />
                            <label htmlFor="acceptTerms" className="text-sm">Eu aceito os termos e a política de privacidade</label>
                        </div>

                        {/* ajustando o botão */}
                        <div className="flex justify-center">
                            <button 
                                type="submit" 
                                className="w-full bg-[#A70038] text-white px-4 py-2 rounded-lg hover:bg-[#FF0055] focus:outline-none focus:ring focus:border-red-300"
                            >
                                Cadastre-se
                            </button>
                        </div>
                    </form>
                    {/* login */}
                    <div className="mt-3">
                        <a href="/login" className="text-sm">Tem uma conta? <span className="text-[#A70038] hover:text-[#FF0055]">Conecte-se</span></a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Register;
