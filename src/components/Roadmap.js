import React from "react";
import card from "../assets/img/cards/card.png";

export default function Release() {
  return (
    <section className="section roadmap">
      <div className="main-title">Roadmap</div>
      <div className="roadmapcard desktop">
        <div className="roadmapcard-background">
          <img className="map-image" src={card} alt="Road Map" />
          <div className="icon tooltip">
            <div className="icon-ball">
              <div className="icon-number">1</div>
            </div>
            <span className="tooltiptext">
              <ul>
                <li>Social Media Launch</li>
                <li>Community Engagement</li>
                <li>Prize Giveaways</li>
                <li>AMA Events</li>
              </ul>
            </span>
          </div>
          <div className="icon tooltip">
            <div className="icon-ball">
              <div className="icon-number">2</div>
            </div>
            <span className="tooltiptext">
              <ul>
                <li>Partnership Growth</li>
                <li>Prize Giveaways</li>
                <li>Tilted Dabbers OG WL lock-in</li>
              </ul>
            </span>
          </div>
          <div className="icon tooltip">
            <div className="icon-ball">
              <div className="icon-number">3</div>
            </div>
            <span className="tooltiptext">
              <ul>
                <li>Tilted Dabbers secondary market in (Ebisu's Bay)</li>
                <li>Main Hall PHP Design</li>
                <li>Social Media Update</li>
                <li>Medium Blog Update </li>
                <li>Website Update</li>
              </ul>
            </span>
          </div>
          <div className="icon tooltip">
            <div className="icon-ball">
              <div className="icon-number">4</div>
            </div>
            <span className="tooltiptext">
              <ul>
                <li>Main Hall PFP Mint + Listing on Ebisu's Bay</li>
                <li>Create Twisted House Custom PFPs</li>
                <li>Design base CroBINGO NFT cards</li>
              </ul>
            </span>
          </div>
          <div className="icon tooltip">
            <div className="icon-ball">
              <div className="icon-number">5</div>
            </div>
            <span className="tooltiptext">
              <ul>
                <li>Develop and launch the CroBINGO platform</li>
                <li>Plan a CroBINGO game either through partner request or BBB lead event</li>
                <li>Update all social media and release BBB Litepaper</li>
              </ul>
            </span>
          </div>
          <div className="icon tooltip">
            <div className="icon-ball">
              <div className="icon-number">6</div>
            </div>
            <span className="tooltiptext">
              <ul>
                <li>Execute the first CroBINGO event and hold subsequent lessons learned period</li>
                <li>Implement revised or improved features where required</li>
              </ul>
            </span>
          </div>
          <div className="icon tooltip">
            <div className="icon-ball">
              <div className="icon-number">7</div>
            </div>
            <span className="tooltiptext">
              <ul>
                <li>Community engagement on the following topics:</li>
                <li>#Charity Funds</li>
                <li>#Partnered Project Beneficiary Scheme Action</li>
                <li>#Project moves into reset phase while repeating all phases routinely</li>
              </ul>
            </span>
          </div>
          <div className="icon tooltip">
            <div className="icon-ball">
              <div className="icon-number">8</div>
            </div>
            <span className="tooltiptext"><ul><li>Community vote for partnered project - Beneficiary Schema</li></ul></span>
          </div>
        </div>
      </div>
      <div className="roadmapcard mobile">
        <div className="roadmap-container">
          <div className="icon-ball">
            <div className="icon-number">1</div>
          </div>
          <div className="roadmap-info">
            <ul>
              <li>Social Media Launch</li>
              <li>Community Engagement</li>
              <li>Prize Giveaways</li>
              <li>AMA Events</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-container">
          <div className="icon-ball">
            <div className="icon-number">2</div>
          </div>
          <div className="roadmap-info">
            <ul>
              <li>Partnership Growth</li>
              <li>Prize Giveaways</li>
              <li>Tilted Dabbers OG WL lock-in</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-container">
          <div className="icon-ball">
            <div className="icon-number">3</div>
          </div>
          <div className="roadmap-info">
            <ul>
              <li>Tilted Dabbers secondary market in (Ebisu's Bay)</li>
              <li>Main Hall PHP Design</li>
              <li>Social Media Update</li>
              <li>Medium Blog Update </li>
              <li>Website Update</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-container">
          <div className="icon-ball">
            <div className="icon-number">4</div>
          </div>
          <div className="roadmap-info">
            <ul>
              <li>Main Hall PFP Mint + Listing on Ebisu's Bay</li>
              <li>Create Twisted House Custom PFPs</li>
              <li>Design base CroBINGO NFT cards</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-container">
          <div className="icon-ball">
            <div className="icon-number">5</div>
          </div>
          <div className="roadmap-info">
            <ul>
              <li>Develop and launch the CroBINGO platform</li>
              <li>Plan a CroBINGO game either through partner request or BBB lead event</li>
              <li>Update all social media and release BBB Litepaper</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-container">
          <div className="icon-ball">
            <div className="icon-number">6</div>
          </div>
          <div className="roadmap-info">
            <ul>
              <li>Execute the first CroBINGO event and hold subsequent lessons learned period</li>
              <li>Implement revised or improved features where required</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-container">
          <div className="icon-ball">
            <div className="icon-number">7</div>
          </div>
          <div className="roadmap-info">
            <ul>
              <li>Community engagement on the following topics:</li>
              <li>#Charity Funds</li>
              <li>#Partnered Project Beneficiary Scheme Action</li>
              <li>#Project moves into reset phase while repeating all phases routinely</li>
            </ul>
          </div>
        </div>
        <div className="roadmap-container">
          <div className="icon-ball">
            <div className="icon-number">8</div>
          </div>
          <div className="roadmap-info">
            <ul><li>Community vote for partnered project - Beneficiary Schema</li></ul>
          </div>
        </div>
      </div>
    </section>
  );
}
