/**
 * RICO DINHEIRINHO - AUTH ENGINE
 * Gerencia a identidade local do usuário e sessões.
 * Preparado para expansão para sistemas de login reais.
 */

const AUTH_KEY = 'rd_user_session_v1';

export const FinanceAuth = {
    /**
     * Recupera os dados do usuário logado localmente.
     * @returns {Object|null}
     */
    getUser() {
        const data = localStorage.getItem(AUTH_KEY);
        return data ? JSON.parse(data) : null;
    },

    /**
     * Realiza um "login" local simplificado.
     * @param {string} name 
     */
    login(name) {
        const user = {
            id: crypto.randomUUID(),
            name: name,
            lastLogin: new Date().toISOString()
        };
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
        return user;
    },

    /**
     * Encerra a sessão local.
     */
    logout() {
        localStorage.removeItem(AUTH_KEY);
        window.location.reload();
    },

    /**
     * Verifica se existe um usuário ativo.
     * @returns {boolean}
     */
    isAuthenticated() {
        return this.getUser() !== null;
    }
};
