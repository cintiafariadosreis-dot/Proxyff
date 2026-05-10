const keys = [];

function gerarKey(dias) {
    const codigo = Math.random().toString(36).substring(2, 10).toUpperCase();
    const key = `proxyff-${dias}days-${codigo}`;

    const expira = new Date();
    expira.setDate(expira.getDate() + dias);

    keys.push({
        key: key,
        usada: false,
        expira: expira
    });

    return key;
}

function validarKey(keyRecebida) {
    const encontrada = keys.find(k => k.key === keyRecebida);

    if (!encontrada) {
        return "Key inválida";
    }

    if (new Date() > encontrada.expira) {
        return "Key expirada";
    }

    return "Key válida";
}

console.log("Nova key:", gerarKey(1));
