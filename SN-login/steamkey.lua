 --[[
*Author: Soon
*Description: SN-Login Loadscreen
*Version: 1.0
*Github: https://github.com/Soonnova
*Discord: https://discord.gg/Z85GmkV8E3
--]]
-------------------------------------------------------------------------------
local UMLoadingScreenSteamKey = "here" -- server.cfg steam_webApiKey
-- https://steamcommunity.com/dev/apikey
-------------------------------------------------------------------------------

AddEventHandler('playerConnecting', function(_, _, deferrals)
    local source = source

    deferrals.handover({
        name = GetPlayerName(source)
    })
end)