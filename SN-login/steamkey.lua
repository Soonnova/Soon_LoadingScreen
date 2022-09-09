 --[[
*Author: Uyuyorum
*Description: Uyuyorum Loading Screen
*Version: 1.0
*Github: https://github.com/alp1x
*Discord: https://discord.gg/cf6wkBFeYV 
--]]
-------------------------------------------------------------------------------
local UMLoadingScreenSteamKey = "AF12A692E7C57A9D8E86941FFA4DD10F" -- server.cfg steam_webApiKey
-- https://steamcommunity.com/dev/apikey
-------------------------------------------------------------------------------

AddEventHandler('playerConnecting', function(_, _, deferrals)
    local source = source

    deferrals.handover({
        name = GetPlayerName(source)
    })
end)