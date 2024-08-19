const kmHToMelos = 13320;
const step = -4;

document.addEventListener("DOMContentLoaded", () => {
    const kmHInput = document.getElementById("km-h");
    const mSInput = document.getElementById("m-s");
    const melosInput = document.getElementById("melos");
    const maxKmHInput = document.getElementById("max-km-h");
    const maxPowKmHInput = document.getElementById("max-pow-km-h");

    const kmHOutput = document.getElementById("km-h-output");
    const mSOutput = document.getElementById("m-s-output");
    const melosOutput = document.getElementById("melos-output");
    const maxKmHOutput = document.getElementById("max-km-h-output");
    const maxPowKmHOutput = document.getElementById("max-pow-km-h-output");

    function convertFromKmH(value) {
        const kmH = parseFloat(value);
        const mS = kmH / 3.6;
        const melos = kmH / kmHToMelos;
        mSInput.value = mS;
        melosInput.value = melos;

        assignmentForOutput(kmH, mS, melos);
    }

    function convertFromMS(value) {
        const mS = parseFloat(value);
        const kmH = mS * 3.6;
        const melos = kmH / kmHToMelos;
        kmHInput.value = kmH;
        melosInput.value = melos;

        assignmentForOutput(kmH, mS, melos);
    }

    function convertFromMelos(value) {
        const melos = parseFloat(value);
        console.log(melos);
        const kmH = melos * kmHToMelos;
        const mS = kmH / 3.6;
        kmHInput.value = kmH;
        mSInput.value = mS;

        assignmentForOutput(kmH, mS, melos);
    }

    function setMaxByValue(value) {
        const maxKmH = parseFloat(value) ** maxPowKmHInput.value;
        maxKmHOutput.value = value;
        setMax(maxKmH);
    }

    function setMaxByPow(value) {
        const maxKmHPow = parseFloat(value);

        const maxKmH = maxKmHInput.value ** maxKmHPow;
        setMax(maxKmH);
        maxPowKmHOutput.value = maxKmHPow;
    }

    function setMax(maxKmH) {
        const maxMS = maxKmH / 3.6;
        const maxMelos = maxKmH / kmHToMelos;

        kmHInput.max = maxKmH;
        mSInput.max = maxMS;
        melosInput.max = maxMelos;
    }

    function assignmentForOutput(kmH, mS, melos) {
        kmHOutput.value = kmH;
        mSOutput.value = mS;
        melosOutput.value = melos;
    }

    kmHInput.addEventListener("input", (e) => convertFromKmH(e.target.value));
    mSInput.addEventListener("input", (e) => convertFromMS(e.target.value));
    melosInput.addEventListener("input", (e) =>
        convertFromMelos(e.target.value),
    );
    maxKmHInput.addEventListener("input", (e) => setMaxByValue(e.target.value));
    maxPowKmHInput.addEventListener("input", (e) =>
        setMaxByPow(e.target.value),
    );
});
