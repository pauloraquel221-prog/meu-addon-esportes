/**
 * manifest.js — FUTUFCTV Stremio Addon Manifest
 */

const { addonBuilder } = require('stremio-addon-sdk');

const manifest = {
  id: 'com.paulo.futufctv',
  version: '1.0.0',
  name: '🏆 FUTUFCTV',
  description:
    'FUTUFCTV — Transmissões esportivas ao vivo: Futebol, UFC/MMA, NBA, F1, Tênis e canais esportivos 24/7.',
  logo: '/logo.png',

  types: ['tv', 'series', 'channel'],
  resources: ['catalog', 'meta', 'stream'],

  catalogs: [
    { type: 'tv', id: 'nuvio_sports_teams', name: '⭐ Seus Times', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_live', name: '🔴 Ao Vivo Agora', extra: [
      { name: 'genre', options: ['Football', 'Cricket', 'Basketball', 'Motorsport', 'Tennis', 'Baseball', 'Hockey', 'Rugby', 'American Football', 'MMA', 'Golf', 'Darts', 'Other'], isRequired: false },
      { name: 'search', isRequired: false }
    ] },
    { type: 'tv', id: 'nuvio_sports_networks', name: '📺 Canais 24/7', extra: [
      { name: 'search', isRequired: false },
      { name: 'skip', isRequired: false }
    ] },
    { type: 'tv', id: 'nuvio_sports_replays', name: '⏪ Replays Esportivos', extra: [{ name: 'skip', isRequired: true }] },

    // Parent Replay Catalogs
    { type: 'tv', id: 'nuvio_sports_replays_football', name: '⚽ Replays Futebol', extra: [{ name: 'skip', isRequired: true }] },
    { type: 'tv', id: 'nuvio_sports_replays_motorsport', name: '🏎️ Replays Motorsport', extra: [{ name: 'skip', isRequired: true }] },
    { type: 'tv', id: 'nuvio_sports_replays_baseball', name: '⚾ Replays Baseball', extra: [{ name: 'skip', isRequired: true }] },
    { type: 'tv', id: 'nuvio_sports_replays_rugby', name: '🏉 Replays Rugby', extra: [{ name: 'skip', isRequired: true }] },
    { type: 'tv', id: 'nuvio_sports_replays_basketball', name: '🏀 Replays Basquete', extra: [{ name: 'skip', isRequired: true }] },
    { type: 'tv', id: 'nuvio_sports_replays_tennis', name: '🎾 Replays Tênis', extra: [{ name: 'skip', isRequired: true }] },
    { type: 'tv', id: 'nuvio_sports_replays_hockey', name: '🏒 Replays Hockey', extra: [{ name: 'skip', isRequired: true }] },
    { type: 'tv', id: 'nuvio_sports_replays_american_football', name: '🏈 Replays Futebol Americano', extra: [{ name: 'skip', isRequired: true }] },

    { type: 'tv', id: 'nuvio_sports_football', name: '⚽ Futebol', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_cricket', name: '🏏 Cricket', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_basketball', name: '🏀 Basquete', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_motorsport', name: '🏎️ F1 & Motor', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_hockey', name: '🏒 Hockey', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_baseball', name: '⚾ Baseball', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_mma', name: '🥊 UFC & MMA', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_golf', name: '⛳ Golf', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_tennis', name: '🎾 Tênis', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_rugby', name: '🏉 Rugby', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_american_football', name: '🏈 Futebol Americano', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_darts', name: '🎯 Darts', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_college', name: '🎓 Esportes Universitários', extra: [{ name: 'search', isRequired: false }] },
    { type: 'tv', id: 'nuvio_sports_other', name: '🏅 Outros Esportes', extra: [{ name: 'search', isRequired: false }] },

    { type: 'tv', id: 'nuvio_sports_upcoming', name: '⏱️ Próximos Jogos', extra: [
      { name: 'genre', options: ['Football', 'Cricket', 'Basketball', 'Motorsport', 'Tennis', 'Baseball', 'Hockey', 'Rugby', 'American Football', 'MMA', 'Golf', 'Darts', 'Other'], isRequired: false },
      { name: 'search', isRequired: false }
    ] }
  ],

  config: [
    { key: 'teams', title: 'Times Favoritos (separados por vírgula)', type: 'text' },
    { key: 'sports', title: 'Esportes Ativos (separados por vírgula)', type: 'text', default: 'all' },
    {
      key: 'timezone',
      title: 'Fuso Horário',
      type: 'text',
      default: 'America/Fortaleza'
    },
    { key: 'languages', title: 'Idiomas Preferidos (separados por vírgula)', type: 'text', default: 'pt, es, en' },
    { key: 'replayFilter', title: 'Catálogo de Replays (all ou mainstream)', type: 'text', default: 'all' },
    { key: 'liveSources', title: 'Fontes Ao Vivo & TV (separadas por vírgula)', type: 'text', default: 'all' },
    { key: 'replaySources', title: 'Fontes de Replay & VOD (separadas por vírgula)', type: 'text', default: 'all' },
    { key: 'sources', title: 'Todas as Fontes (legado, separadas por vírgula)', type: 'text', default: 'all' }
  ],

  idPrefixes: ['nuvio_sport_'],

  behaviorHints: {
    adult: false,
    p2p: false,
    configurable: true
  }
};

const builder = new addonBuilder(manifest);

module.exports = { builder, manifest };
