enum StarbuksGrade {
    WELCOME = "WELCOME",
    GREEN = "GREEN",
    GOLD = 1
};

function getDiscount(v: StarbuksGrade): number {
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
};

console.log(getDiscount(StarbuksGrade.GREEN));

console.log(StarbuksGrade.GREEN === "GREEN")

console.log(StarbuksGrade["GREEN"]);

console.log(StarbuksGrade[1]);

