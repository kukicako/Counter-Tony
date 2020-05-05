import React from 'react'
import eleaguemajor from '../../images/eleaguemajor.jpg'
import blogtestpic1 from '../../images/blogtestpic1.jpg'
import blogtestpic2 from '../../images/blogtestpic2.jpg'

function Eleague(){
    return(
        <div>
            <div>
                <img className="BlogsTitleImage" src={eleaguemajor} alt="Title Image Saying Eleague Major" />
            </div>
            <div className='BlogsEntry'>
                <h2 className="BlogH2">CLOUD9 BEAT FAZE TO WIN ELEAGUE MAJOR BOSTON</h2>
                <h5 className="BlogH5">Cloud9 came from behind to beat FaZe 2-1 and win ELEAGUE Major Boston (14-16 on Mirage, 16-10 on Overpass and 22-19 on Inferno).</h5>
                <p className="BlogP">Mirage was the map that kicked off the series, with Cloud9 on the Terrorist side, and the North Americans ran all over the FaZe defence as they stormed to a 7-1 lead, with Tyler "Skadoodle" Latham leading the charge for his team many key plays.</p>
                <p className="BlogH2">FaZe then finally adjusted to Cloud9's system and strung four rounds together to build up an economy and halt their opponents' momentum. Cloud9 then got their ninth round of the game off of a triple-kill from William "RUSH" Wierzba, but they could not go into double digits as Ladislav "GuardiaN" Kovács pulled off a fantastic quad-kill in A to keep a three-round deficit for his side.</p>
                <p className="BlogH2">The second half began with FaZe storming the A site with a fast execution, with Håvard "rain" Nygaard clearing the path for his team with three entry frags. They would not be able to follow it up, however, as they were caught off-guard by Cloud9's scout/CZ force-buy, which gave the North Americans a sizeable lead to work with.</p>
                <p className="BlogH2">After getting their economy back on track, FaZe moved up a gear and went on a fantastic run that only ended when they reached map point. With a last-gasp effort, the home side still took the game to the 30th round, but they failed in their efforts to push for overtime as a triple-kill from Olof "olofmeister" Kajbjer in a fast B push sealed the deal for FaZe.</p>
            </div>
            <div className="BlogParaImage">
                <img className="BlogEntryImage" src={blogtestpic1} />
            </div>
            <div className='BlogsEntry'>
                <p className="BlogH2">Cobblestone followed the same pattern as the first map as Cloud9 won the pistol round and the subsequent anti-ecos to secure a quick 3-0 lead. And just like on Mirage, they remained in control even when the game reached the gun rounds, winning five more rounds, the last of which after overturning a 2v4 situation.</p>
                <p className="BlogH2">FaZe then finally got a footing in the game as they picked up two rounds in a row, but Cloud9 did not let their opponents off the hook and tightened up their defence to secure a 12-3 half-time lead.</p>
                <p className="BlogH2">The Europeans knew they had a mountain to climb to overcome the huge deficit, but they refused to throw in the towel, winning the pistol round after a trio of quick kills from rain had put them in a 5v2 situation. Cloud9 rallied back instantly on a force-buy, however, after hitting the B site on the back timely kill from Jake "Stewie2K" Yip, with Skadoodle following that up with a 1v3 clutch in the next round.</p>
                <p className="BlogH2">Cloud9 went on to reach map point, but then FaZe responded with a series of rounds to ensure that their opponents would not find the win gift-wrapped. At 8-15, Nikola "NiKo" Kovač finally showed up in the server, picking up three quick kills in B to help his team to overturn a 3v4 situation that could have cost them the map. But a comeback was not on the cards: with triple-kill from Tarik "tarik" Celik in an A execution, the North Americans won the last round they needed taking the series to a third map.</p>
            </div>
            <div className="BlogParaImage">
                <img className="BlogEntryImage" src={blogtestpic2} />
            </div>
            <div className='BlogsEntry'>
                <p className="BlogH2">Carrying their momentum into Inferno, Cloud9 strolled to a 5-1 lead on the Terrorist side despite losing the pistol round. FaZe then picked up the pace and overcame the deficit after giving their opponents very little room to operate, with the North Americans struggling to find openers. Down 5-8, Cloud9 manage to win the final two rounds of the half thanks to key plays from Skadoodle.</p>
                <p className="BlogH2">FaZe came from the break looking the livelier of the two sides and quickly hit 14 rounds after shutting down any chances of Cloud9 building up an economy. The North Americans then finally strung two rounds together, but they could not prevent FaZe from reaching match point after NiKo had opened up the B site with two kills in banana.</p>
                <p className="BlogH2">With just a sliver of hope, Cloud9 turned to Stewie2K, who came up huge time and time again in B to inspire his team to take the game to overtime.</p>
                <p className="BlogH2">The first overtime could not determine a winner as both teams won all three rounds on the CT side, with FaZe coming back from a 15-18 deficit to restore parity once more. Cloud9 would not let that setback get to them however, and a tarik ace in B was the catalyst for a great run that saw the North Americans win the highly-coveted Major title.</p>
            </div>
        </div>
    )
}

export default Eleague