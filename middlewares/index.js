const soma = (req, res, next) => {
    const { numero1, numero2 } = req.params;
    return res.status(200).json({ soma: Number(numero1) + Number(numero2) });
}

const subtracao = (req, res, next) => {
    const { numero1, numero2 } = req.params;
    return res.status(200).json({ subtracao: numero1 - numero2 });
}

const multiplicacao = (req, res, next) => {
    const { numero1, numero2 } = req.params;
    return res.status(200).json({ multiplicacao: numero1 * numero2 });
}

const divisao = (req, res, next) => {
    const { numero1, numero2 } = req.params;
    return res.status(200).json({ divisao: numero1 / numero2 });
}

module.exports = { soma, subtracao, divisao, multiplicacao };