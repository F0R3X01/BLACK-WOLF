module.exports = {
    app: {
        token: "MTA3MzYxOTcwNTEyODA0Njc5Mg.GRfTQV.jlQXbV0ENAoky7G-OdluzlL5pnZVMooLsXeSOQ",
        playing: 'F0R3X bot',
        global: true,
        guild: '1050390273877889104'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'F0R3X',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
