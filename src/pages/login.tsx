import { useState } from 'react';
import Layout from '../app/layout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Dados do formulário de login:', { email, password });
    };

    return (
        <Layout>
            <title>Conecte-se - Pra Quem Faz</title>
            <div className="min-h-screen flex items-center justify-center">
                <div className="p-6 rounded-lg w-full max-w-md bg-[#2B2B2B] text-[#FFFFFF] shadow-md mt-24 mb-10 mx-10">
                    <h1 className="text-3xl text-center font-bold mb-5">Entrar</h1>

                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                        <div className="relative flex flex-col">
                            <input 
                                type="email" 
                                id="loginEmail" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="peer bg-gray-200 text-gray-800 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
                                required 
                                placeholder=""
                            />
                            <label htmlFor="loginEmail" className="absolute left-4 -top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-500">E-mail</label>
                        </div>

                        <div className="relative flex flex-col">
                            <input 
                                type="password" 
                                id="loginPassword" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="peer bg-gray-200 text-gray-800 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" 
                                required 
                                placeholder=""
                            />
                            <label htmlFor="loginPassword" className="absolute left-4 -top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-gray-500">Senha</label>
                        </div>

                        <div className="mt-3">
                            <a href="/forgot-password" className="text-sm">Esqueci minha senha</a>
                        </div>
                        
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="rememberMe" 
                                className="bg-gray-200 rounded focus:outline-none focus:ring"
                            />
                            <label htmlFor="rememberMe" className="text-sm ml-2">Lembrar-me</label>
                        </div>

                        <div className="flex justify-center">
                            <button 
                                type="submit" 
                                className="w-full bg-[#A70038] text-white px-4 py-2 rounded-lg hover:bg-[#FF0055] focus:outline-none focus:ring focus:border-red-300"
                            >
                                Acessar
                            </button>
                        </div>
                    </form>
                    <div className="mt-3 text-center">
                        <a href="/register" className="text-sm">Não tem uma conta? <span className="text-[#A70038] hover:text-[#FF0055]">Cadastre-se</span></a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
