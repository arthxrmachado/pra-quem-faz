import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setErrorMessage('');

        if (!validateEmail(email)) {
            setErrorMessage('E-mail inválido.');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage('A senha deve conter pelo menos 8 caracteres.');
            return;
        }

        console.log('Dados do formulário de login:', { email, password });
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string) => {
        return password.length >= 8;
    };

    return (
        <>
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
                                className="peer bg-gray-200 text-gray-800 border rounded-lg text-sm px-4 py-3.5 focus:outline-none focus:ring selection:bg-[#A70038] selection:text-white focus:ring-[#A70038] focus:border-[#A70038]" 
                                required 
                                placeholder=""
                            />
                            <label htmlFor="loginEmail" className="absolute left-4 -top-0.3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-valid:-top-0.3 peer-valid:text-xs peer-valid:text-gray-500 focus:ring-2 focus:ring-blue-300 focus:border-transparent">E-mail</label>
                        </div>

                        <div className="relative flex flex-col">
                            <input 
                                type="password" 
                                id="loginPassword" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="peer bg-gray-200 text-gray-800 border rounded-lg text-sm px-4 py-3.5 focus:outline-none focus:ring selection:bg-[#A70038] selection:text-white focus:ring-[#A70038] focus:border-[#A70038]" 
                                required 
                                placeholder=""
                            />
                            <label htmlFor="loginPassword" className="absolute left-4 -top-0.3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-valid:-top-0.3 peer-valid:text-xs peer-valid:text-gray-500 focus:ring-2 focus:ring-blue-300 focus:border-transparent">Senha</label>
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

                        {errorMessage && (
                            <div className="text-red-500 text-sm text-center">
                                {errorMessage}
                            </div>
                        )}

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
        </>
    );
};

export default Login;