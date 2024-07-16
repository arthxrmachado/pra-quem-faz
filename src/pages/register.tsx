import { useState } from 'react';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Função para validar email com RegEx
    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Função para validar senha com RegEx
    const validatePassword = (password: string) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d!@#$%¨&*()]{8,}$/;
        return re.test(password);
    };

    const handleRegisterSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setErrorMessage('');

        if (!validateEmail(email)) {
            setErrorMessage('E-mail inválido.');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage('Senha inválida. A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('As senhas não coincidem.');
            return;
        }

        if (!acceptedTerms) {
            setErrorMessage('Você precisa aceitar os termos e a política de privacidade.');
            return;
        }

        // Adicionar a lógica para enviar os dados para o back-end
        console.log('Dados do formulário de cadastro:', { firstName, lastName, email, password });
    };

    return (
        <>
            <title>Cadastre-se - Pra Quem Faz</title>
            <div className="min-h-screen flex items-center justify-center">
                <div className="p-6 rounded-lg w-full max-w-md bg-[#2B2B2B] text-[#FFFFFF] shadow-md mt-24 mb-10 mx-10">
                    <h1 className="text-3xl text-center font-bold mb-5 ml-2">Cadastre-se</h1>

                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                        <div className="relative flex flex-col">
                            <input 
                                type="text" 
                                id="firstName" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                className="peer bg-gray-200 text-gray-800 border rounded-lg text-sm px-4 py-3.5 focus:outline-none focus:ring selection:bg-[#A70038] selection:text-white focus:ring-[#A70038] focus:border-[#A70038]" 
                                required
                                placeholder=""
                            />
                            <label htmlFor="firstName" className="absolute left-4 -top-0.3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-valid:-top-0.3 peer-valid:text-xs peer-valid:text-gray-500 focus:ring-2 focus:ring-blue-300 focus:border-transparent">Nome</label>
                        </div>

                        <div className="relative flex flex-col">
                            <input 
                                type="text" 
                                id="lastName" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                                className="peer bg-gray-200 text-gray-800 border rounded-lg text-sm px-4 py-3.5 focus:outline-none focus:ring selection:bg-[#A70038] selection:text-white focus:ring-[#A70038] focus:border-[#A70038]" 
                                required 
                                placeholder=""
                            />
                            <label htmlFor="lastName" className="absolute left-4 -top-0.3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-valid:-top-0.3 peer-valid:text-xs peer-valid:text-gray-500 focus:ring-2 focus:ring-blue-300 focus:border-transparent">Sobrenome</label>
                        </div>

                        <div className="relative flex flex-col">
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="peer bg-gray-200 text-gray-800 border rounded-lg text-sm px-4 py-3.5 focus:outline-none focus:ring selection:bg-[#A70038] selection:text-white focus:ring-[#A70038] focus:border-[#A70038]" 
                                required 
                                placeholder=""
                            />
                            <label htmlFor="email" className="absolute left-4 -top-0.3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-valid:-top-0.3 peer-valid:text-xs peer-valid:text-gray-500 focus:ring-2 focus:ring-blue-300 focus:border-transparent">E-mail</label>
                        </div>

                        <div className="relative flex flex-col">
                            <input 
                                type="password" 
                                id="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="peer bg-gray-200 text-gray-800 border rounded-lg text-sm px-4 py-3.5 focus:outline-none focus:ring selection:bg-[#A70038] selection:text-white focus:ring-[#A70038] focus:border-[#A70038]" 
                                required 
                                placeholder=""
                            />
                            <label htmlFor="password" className="absolute left-4 -top-0.3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-valid:-top-0.3 peer-valid:text-xs peer-valid:text-gray-500 focus:ring-2 focus:ring-blue-300 focus:border-transparent">Senha</label>
                        </div>

                        <div className="relative flex flex-col">
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                className="peer bg-gray-200 text-gray-800 border rounded-lg text-sm px-4 py-3.5 focus:outline-none focus:ring selection:bg-[#A70038] selection:text-white focus:ring-[#A70038] focus:border-[#A70038]" 
                                required 
                                placeholder=""
                            />
                            <label htmlFor="confirmPassword" className="absolute left-4 -top-0.3 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-valid:-top-0.3 peer-valid:text-xs peer-valid:text-gray-500 focus:ring-2 focus:ring-blue-300 focus:border-transparent">Confirmar senha</label>
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
                                Cadastre-se
                            </button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <a href="/login" className="text-sm">Tem uma conta? <span className="text-[#A70038] hover:text-[#FF0055]">Conecte-se</span></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;