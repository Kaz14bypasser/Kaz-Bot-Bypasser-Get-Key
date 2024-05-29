//MADE BY WMND .gg/bypassi
//uses stickx api


const { Client } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const axios = require('axios')

// Initialize token first
const token = 'Token bot'; // the bots token

const client = new Client({ intents: 3276799 });
const rest = new REST({ version: '10' }).setToken(token);

const clientId = ''; //the bots client id// user id
const botstatus = "STATUS API: ONLINE 🔑"
const advertise = true; //if you want it to send server invite after command ran keep it true if not keep it false
const serverinvite = "https://discord.gg/M7VmvrC2jm"; //server invite for when command ran it replies with server invite
const madeby = ""; //for embed like "Made By {}"
const apikey = ""; //api key using stickx. only change when key is invalid https://discord.gg/AqXmxKV8s8 new key in that server
const endpoint = "http://45.90.13.151:6041" //bypassi api endpoint ONLY CHANGE WHEN ANNOUNCEMENT

const commands = [
    {
        name: 'arceus',
        description: 'Whitelist Arceus X',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Arceus link',
                required: true,
            },
        ],
    },
    {
        name: 'codex',
        description: 'Whitelist Codex',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Codex link',
                required: true,
            },
        ],
    },
    {
        name: 'delta',
        description: 'Gets Delta Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Delta link',
                required: true,
            },
        ],
    },
    {
        name: 'hydrogen',
        description: 'Gets Hydrogen Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Hydrogen link',
                required: true,
            },
        ],
    },
    {
        name: 'hohohub',
        description: 'Gets hohohub Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The hohohub link',
                required: true,
            },
        ],
    },
    {
        name: 'trigon',
        description: 'Gets Trigon Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Trigon link',
                required: true,
            },
        ],
    },
    {
        name: 'vegax',
        description: 'Gets VegaX Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The VegaX link',
                required: true,
            },
        ],
    },
    {
        name: 'fluxus',
        description: 'Gets Fluxus Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Fluxus link',
                required: true,
            },
        ],
    },
];

client.once('ready', async () => {
    console.log(`\x1b[36mSuccessfully Logged In As ${client.user.username}\x1b[0m`);
    client.user.setPresence({
        activities: [{ name: botstatus, type: "LISTENING" }],
        status: 'dnd',
    });
});

(async () => {
    try {
        console.log('Started refreshing global application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded global application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'arceus') {
        await arceusx(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'codex') {
        await codex(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'delta') {
        await delta(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'hydrogen') {
        await hydrogen(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'hohohub') {
        await hohohub(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'trigon') {
        await trigon(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    } else if (interaction.commandName === 'vegax') {
        await vegax(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    }else if (interaction.commandName === 'trigon') {
        await trigon(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    }else if (interaction.commandName === 'fluxus') {
        await fluxus(interaction);
        if(advertise == true ){
            await interaction.followUp({ content: serverinvite, ephemeral: true });
        }else{
            return;
        }
    }
});

async function arceusx(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Arceus",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206325894835347526/arcx.png?ex=6637e289&is=66369109&hm=1f9912400698d196916274b1919be1404452d986f1c65f5816d3ca3c6ddebe5c&=&format=webp&quality=lossless&width=416&height=417' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://spdmteam.com/key-system-1?hwid=')) {
        const hwid = link.split('=')[1].split('&')[0];
        const apiUrl = `${endpoint}/?url=${link}&apikey=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "Whitelisted!") {
                await interaction.editReply({
                    embeds: [{
                        title: "Success",
                        "color": 458532,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206325894835347526/arcx.png?ex=6637e289&is=66369109&hm=1f9912400698d196916274b1919be1404452d986f1c65f5816d3ca3c6ddebe5c&=&format=webp&quality=lossless&width=416&height=417' },
                        fields: [
                            { name: 'Status:', value: '```yaml\nSuccesfully Whitelisted. Please Wait For Countdown Or Restart Roblox.\n```' },
                            { name: 'HWID:', value: `${box}yaml\n${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}yaml\n${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Arceus",
                        "color": 16713222,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206325894835347526/arcx.png?ex=6637e289&is=66369109&hm=1f9912400698d196916274b1919be1404452d986f1c65f5816d3ca3c6ddebe5c&=&format=webp&quality=lossless&width=416&height=417' },
                        fields: [
                            { name: 'Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: 'HWID:', value: `${box}ml\n${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Arceus",
                    "color": 16713222,
                    thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206325894835347526/arcx.png?ex=6637e289&is=66369109&hm=1f9912400698d196916274b1919be1404452d986f1c65f5816d3ca3c6ddebe5c&=&format=webp&quality=lossless&width=416&height=417' },
                    fields: [
                        { name: 'Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Arceus Link",
                "color": 16713222,
                fields: [
                    { name: 'Link', value: `${box}ml\n${link}${box}` }
                ]
            }]
        });
    }
}

async function codex(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Whitelisting Your Codex",
            "color": 587253,
            thumbnail: { url: 'https://images-ext-1.discordapp.net/external/wYh10ZtxQKZPut3buWuQu8YMbGXhbfq7dKatbBJ25Uw/https/cdn.discordapp.com/emojis/1195636867413053510.png?format=webp&quality=lossless' },
            fields: [
                { name: 'Status', value: '```Wait 0-30s```' }
            ]
        }],
    });

    if (link.startsWith('https://mobile.codex.lol/?token=') || link.startsWith('https://mobile.codex.lol?token=')) {
        const token = link.split('token')[1];
        const apiUrl = `${endpoint}/?url=${link}&apikey=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key === "true") {
                await interaction.editReply({
                    embeds: [{
                        title: "1240836551622135878>Success",
                        "color": 458532,
                        thumbnail: { url: 'https://images-ext-1.discordapp.net/external/wYh10ZtxQKZPut3buWuQu8YMbGXhbfq7dKatbBJ25Uw/https/cdn.discordapp.com/emojis/1195636867413053510.png?format=webp&quality=lossless' },
                        fields: [
                            { name: 'Status:', value: '```yaml\nSuccesfully Whitelisted. Wait Up To A Minute Or Restart Roblox.\n```' },
                            { name: 'Token:', value: `${box}yaml\n${token}${box}` },
                            { name: 'Time Taken:', value: `${box}yam\n${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Whitelisted Codex",
                        "color": 16713222,
                        thumbnail: { url: 'https://images-ext-1.discordapp.net/external/wYh10ZtxQKZPut3buWuQu8YMbGXhbfq7dKatbBJ25Uw/https/cdn.discordapp.com/emojis/1195636867413053510.png?format=webp&quality=lossless' },
                        fields: [
                            { name: 'Status:', value: '```ml\nEither Token Is Invalid Or Api Is Not Working.\n```' },
                            { name: 'Token:', value: `${box}ml\n${token}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Whitelisted Codex",
                    "color": 16713222,
                    thumbnail: { url: 'https://images-ext-1.discordapp.net/external/wYh10ZtxQKZPut3buWuQu8YMbGXhbfq7dKatbBJ25Uw/https/cdn.discordapp.com/emojis/1195636867413053510.png?format=webp&quality=lossless' },
                    fields: [
                        { name: 'Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Codex Link",
                "color": 16713222,
                fields: [
                    { name: 'Link', value: `${box}ml\n${link}${box}` }
                ]
            }]
        });
    }
}

async function delta(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Delta Key",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1160520088181542925/1199162006993895484/deltax.png?ex=663ad3a5&is=66398225&hm=0102ff78b7b4eb6b765b214a1685d53f6a4daf049fc9fd1ec8bfffa574238334&=&format=webp&quality=lossless' },
            fields: [
                { name: 'Status', value: '```Wait 0-30s```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/8?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `${endpoint}/?url=${link}&apikey=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Success",
                        "color": 458532,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1160520088181542925/1199162006993895484/deltax.png?ex=663ad3a5&is=66398225&hm=0102ff78b7b4eb6b765b214a1685d53f6a4daf049fc9fd1ec8bfffa574238334&=&format=webp&quality=lossless' },
                        fields: [
                            { name: 'Status:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: 'HWID:', value: `${box}yaml\n${hwid}\n${box}` },
                            { name: 'Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Delta Key",
                        "color": 16713222,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1160520088181542925/1199162006993895484/deltax.png?ex=663ad3a5&is=66398225&hm=0102ff78b7b4eb6b765b214a1685d53f6a4daf049fc9fd1ec8bfffa574238334&=&format=webp&quality=lossless' },
                        fields: [
                            { name: 'Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: 'HWID:', value: `${box}ml\n${hwid}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Delta key",
                    "color": 16713222,
                    thumbnail: { url: 'https://media.discordapp.net/attachments/1160520088181542925/1199162006993895484/deltax.png?ex=663ad3a5&is=66398225&hm=0102ff78b7b4eb6b765b214a1685d53f6a4daf049fc9fd1ec8bfffa574238334&=&format=webp&quality=lossless' },
                    fields: [
                        { name: 'Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Delta Link",
                "color": 16713222,
                fields: [
                    { name: 'Link', value: `${box}ml\n${link}\n${box}` }
                ]
            }]
        });
    }
}

async function hydrogen(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Hydrogen Key",
            "color": 587253,
            thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/2569?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `${endpoint}/?url=${link}&apikey=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Success",
                        "color": 458532,
                        thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                        fields: [
                            { name: 'Status:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: 'HWID:', value: `${box}yaml\n${hwid}\n${box}` },
                            { name: 'Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Hydrogen Key",
                        "color": 16713222,
                        thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                        fields: [
                            { name: 'Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: 'HWID:', value: `${box}ml\n${hwid}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Hydrogen key",
                    "color": 16713222,
                    thumbnail: { url: 'https://hydrogenexec.com/wp-content/uploads/2024/02/logo-hydrogen-executor.webp' },
                    fields: [
                        { name: 'Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "<a:no2:1240837393419079711>Invalid Hydrogen Link",
                "color": 16713222,
                fields: [
                    { name: 'Link', value: `${box}ml\n${link}\n${box}` }
                ]
            }]
        });
    }
}

async function hohohub(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting HoHoHub Key",
            "color": 587253,
            thumbnail: { url: 'https://images-ext-1.discordapp.net/external/QP0nDN0HoIA13bjh0wc7HxhvsCRWVS_68jqkEK0I-K0/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1220640265182908466.webp?format=webp' },
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://hohohubv-ac90f67762c4.herokuapp.com/api/getkeyv2?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `${endpoint}/?url=${link}&apikey=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Success",
                        "color": 458532,
            			thumbnail: { url: 'https://images-ext-1.discordapp.net/external/QP0nDN0HoIA13bjh0wc7HxhvsCRWVS_68jqkEK0I-K0/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1220640265182908466.webp?format=webp' },    
                        fields: [
                            { name: 'Status:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: 'HWID:', value: `${box}yaml\n${hwid}\n${box}` },
                            { name: 'Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get HoHoHub Key",
                        "color": 16713222,
            			thumbnail: { url: 'https://images-ext-1.discordapp.net/external/QP0nDN0HoIA13bjh0wc7HxhvsCRWVS_68jqkEK0I-K0/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1220640265182908466.webp?format=webp' },              
                        fields: [
                            { name: 'Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: 'HWID:', value: `${box}ml\n${hwid}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get HoHoHub key",
                    "color": 16713222,
            		thumbnail: { url: 'https://images-ext-1.discordapp.net/external/QP0nDN0HoIA13bjh0wc7HxhvsCRWVS_68jqkEK0I-K0/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1220640265182908466.webp?format=webp' },        
                    fields: [
                        { name: 'Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid HoHoHub Link",
                "color": 16713222,
                fields: [
                    { name: 'Link', value: `${box}ml\n${link}\n${box}` }
                ]
            }]
        });
    }
}

async function trigon(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Trigon Key",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326595082653807/trigon.png?ex=6637e330&is=663691b0&hm=690358f205897730d10dd661f753dfd301a5c20204e2f2b1dd0da942ff6b325b&=&format=webp&quality=lossless' },                   
            fields: [
                { name: 'Status', value: '```May take a while...```' }
            ]
        }],
    });

    if (link.startsWith('https://trigonevo.com/getkey/?hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const apiUrl = `${endpoint}/?url=${link}&apikey=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Success",
                        "color": 458532,
            			thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326595082653807/trigon.png?ex=6637e330&is=663691b0&hm=690358f205897730d10dd661f753dfd301a5c20204e2f2b1dd0da942ff6b325b&=&format=webp&quality=lossless' },                            
                        fields: [
                            { name: 'Status:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: 'HWID:', value: `${box}yaml\n${hwid}\n${box}` },
                            { name: 'Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Trigon Key",
                        "color": 16713222,
            			thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326595082653807/trigon.png?ex=6637e330&is=663691b0&hm=690358f205897730d10dd661f753dfd301a5c20204e2f2b1dd0da942ff6b325b&=&format=webp&quality=lossless' },                             
                        fields: [
                            { name: 'Status:', value: '```ml\nEither Hwid Is Invalid Or Api Is Not Working.\n```' },
                            { name: 'HWID:', value: `${box}ml\n${hwid}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Trigon key",
                    "color": 16713222,
            		thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326595082653807/trigon.png?ex=6637e330&is=663691b0&hm=690358f205897730d10dd661f753dfd301a5c20204e2f2b1dd0da942ff6b325b&=&format=webp&quality=lossless' },                   	
                    fields: [
                        { name: 'Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Trigon Link",
                "color": 16713222,
                fields: [
                    { name: 'Link', value: `${box}ml\n${link}\n${box}` }
                ]
            }]
        });
    }
}

async function vegax(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting VegaX Key",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326594537525288/vega.png?ex=6637e330&is=663691b0&hm=9ef8e240b723799a40795aacbb2de6e5384a342d0c9396da0f64524ace96ca2d&=&format=webp&quality=lossless&width=408&height=417' },
            fields: [
                { name: 'Status', value: '```Wait 0-30s```' }
            ]
        }],
    });

    if (link.startsWith('https://pandadevelopment.net/getkey?service=vegax&hwid=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('hwid');
        const encodedLink = encodeURIComponent(link);
        const apiUrl = `${endpoint}/?url=${link}&apikey=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Success",
                        "color": 458532,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326594537525288/vega.png?ex=6637e330&is=663691b0&hm=9ef8e240b723799a40795aacbb2de6e5384a342d0c9396da0f64524ace96ca2d&=&format=webp&quality=lossless&width=408&height=417' },
                        fields: [
                            { name: 'Your Key:', value: `${box}yaml\n${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}yaml\n${hwid}${box}` },
                            { name: 'Time Taken:', value: `${box}yaml\n${time} Seconds${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }   
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get VegaX Key",
                        "color": 16713222,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326594537525288/vega.png?ex=6637e330&is=663691b0&hm=9ef8e240b723799a40795aacbb2de6e5384a342d0c9396da0f64524ace96ca2d&=&format=webp&quality=lossless&width=408&height=417' },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}ml${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "<a:no2:1240837393419079711>Failed To Get VegaX key",
                    "color": 16713222,
                    thumbnail: { url: 'https://media.discordapp.net/attachments/1206325472254894191/1206326594537525288/vega.png?ex=6637e330&is=663691b0&hm=9ef8e240b723799a40795aacbb2de6e5384a342d0c9396da0f64524ace96ca2d&=&format=webp&quality=lossless&width=408&height=417' },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid VegaX Link",
                "color": 16713222,
                fields: [
                    { name: 'Link', value: `${box}ml\n${link}\n${box}` }
                    ],
                footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                }
            }]
        });
    }
}

async function fluxus(interaction) {
    const link = interaction.options.getString('link');
    const box = "```";
    
    await interaction.reply({
        embeds: [{
            title: "Getting Fluxus Key",
            "color": 587253,
            thumbnail: { url: 'https://media.discordapp.net/attachments/1205456615873052712/1239947639165026366/2558-fluxus.png?ex=664769ba&is=6646183a&hm=2cee59399595d0f73a9fdc0faab234430cdb183a24890d5c8d550db3b4747de1&=&format=webp&quality=lossless' },
            fields: [
                { name: 'Status', value: '```Please wait 0-10s```' }
            ]
        }],
    });

    if (link.startsWith('https://flux.li/android/external/start.php?HWID=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const HWID = urlParams.get('HWID');
        const apiUrl = `${endpoint}/?url=${link}&apikey=${apikey}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Success",
                        "color": 458532,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1205456615873052712/1239947639165026366/2558-fluxus.png?ex=664769ba&is=6646183a&hm=2cee59399595d0f73a9fdc0faab234430cdb183a24890d5c8d550db3b4747de1&=&format=webp&quality=lossless' },
                        fields: [
                            { name: 'Your Key:', value: `${box}yaml\n${response.data.key}\n${box}` },
                            { name: 'HWID:', value: `${box}yaml\n${HWID}\n${box}` },
                            { name: 'Time Taken:', value: `${box}yaml\n${time}\n Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Error",
                        "color": 16713222,
                        thumbnail: { url: 'https://media.discordapp.net/attachments/1205456615873052712/1239947639165026366/2558-fluxus.png?ex=664769ba&is=6646183a&hm=2cee59399595d0f73a9fdc0faab234430cdb183a24890d5c8d550db3b4747de1&=&format=webp&quality=lossless' },
                        fields: [
                            { name: 'Status:', value: '```ml\nProbably An Issue With The API. Try Again Later And If It Errors Again Then API Is Offline.\n```' },
                            { name: 'HWID:', value: `${box}ml\n${HWID}\n${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Fluxus key",                   
                    "color": 16713222,
                    thumbnail: { url: 'https://media.discordapp.net/attachments/1205456615873052712/1239947639165026366/2558-fluxus.png?ex=664769ba&is=6646183a&hm=2cee59399595d0f73a9fdc0faab234430cdb183a24890d5c8d550db3b4747de1&=&format=webp&quality=lossless' },
                    fields: [
                        { name: '<a:__:1240837832566771742>Status:', value: '```ml\nEither Api Is Ofline Or Not Responding.\n```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Fluxus Link",
                "color": 16713222,
                fields: [
                    { name: 'Link', value: `${box}ml\n${link}\n${box}` }
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | Made by ${madeby}`
               }
            }]
        });
    }
}




client.login(token);

