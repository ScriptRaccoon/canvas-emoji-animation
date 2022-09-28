// original code by Joachim Viide, formatted by Prettier

x = (c = document.all["🎉"]).getContext("2d");
u = (t) => {
    for (
        x.translate(
            0,
            ((Math.sin(t / 750) + 1) * (c.height |= i = 0)) / 3
        ),
            x.font = "18em x";
        (q = (3.6 * (i + t / 850)) % 16),
            (x.globalAlpha = q / 65),
            ++i < 300;
        x.rotate(0.2)
    )
        x.fillText(`\uD83C\uDF89`, q * 20, q / 4);
    requestAnimationFrame(u);
};
u();
