const { Telegraf } = require('telegraf');

// Telegram bot token
const botToken = '6395741232:AAFp92nOiPjSxOuTcyD4gO9utgvj5xvObtw';

// Create a new bot instance
const bot = new Telegraf(botToken);

// Command to add a member to the group
bot.command('addmember', async (ctx) => {
  const groupId = 'CRYPTO ASSETS'; // Replace with your group's ID
  const userId = ctx.message.from.id;

  try {
    await ctx.telegram.addChatMember(groupId, userId);
    ctx.reply('Member added successfully!');
  } catch (error) {
    console.error('Error adding member:', error);
    ctx.reply('Failed to add member.');
  }
});

// Start the bot
bot.launch();