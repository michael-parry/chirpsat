import React, { Component } from "react";
import Navbar from "../Navbar";
import { HashLink as Link } from "react-router-hash-link";
import { Container } from "react-bootstrap";

const asideStyle = {
  position: "fixed",
  top: "56px",
  width: "175px",
  left: 0,
  bottom: 0,
  overflowY: "auto"
};

export default class home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="d-flex row mt-5 no-gutters justify-content-around">
          <aside className="col-2 mt-5 d-none d-lg-block" style={asideStyle}>
            <div className="list-group-flush">
              <Link
                to="#what_is_it"
                className="list-group-item list-group-item-action px-1"
              >
                What is it?
              </Link>
              <Link
                to="#how_do_i_use_it"
                className="list-group-item list-group-item-action px-1"
              >
                How do I use it?
              </Link>
              <Link
                to="#how_does_it_work"
                className="list-group-item list-group-item-action px-1"
              >
                How does it work?
              </Link>
              <Link
                to="#who_made_it"
                className="list-group-item list-group-item-action px-1"
              >
                Who made it?
              </Link>
              <Link
                to="#how_can_i_help"
                className="list-group-item list-group-item-action px-1"
              >
                How can I help?
              </Link>
            </div>
          </aside>
          <article className="col-10 col-lg-6 offset-lg-3">
            <h1 className="display-4">ChirpSAT</h1>
            <p className="lead mb-5">
              Simple satellite programming for radio amateurs.
            </p>
            <Container>
              <h2>
                <span
                  id="what_is_it"
                  style={{
                    marginTop: "-60px",
                    paddingBottom: "60px",
                    display: "block"
                  }}
                ></span>
                What is it?
              </h2>
              <p>
                ChirpSAT is a web tool built for the amateur radio satellite
                community. Its primary function is to generate channels with
                doppler shift correction that can be easily imported into{" "}
                <abbr title="customer programming software">CPS</abbr> and
                programmed to a radio.
              </p>
            </Container>
            <Container>
              <h2>
                <span
                  id="how_do_i_use_it"
                  style={{
                    marginTop: "-60px",
                    paddingBottom: "60px",
                    display: "block"
                  }}
                ></span>
                How do I use it?
              </h2>
              <p>
                ChirpSAT is easy to use, from the <Link to="/">home</Link> page
                select your radio. This will load options specific to your radio
                and ensure that the .csv generated will be usable in your{" "}
                <abbr title="customer programming software">CPS</abbr>.
              </p>

              <section className="container text-muted">
                <p>
                  If you've never programmed your radio before, check out{" "}
                  <a
                    href="https://powerwerx.com/help/two-way-radios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Powerwerx
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://www.bridgecomsystems.com/pages/support"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BridgeCom Systems
                  </a>{" "}
                  for support on your radio and a download link to the
                  programming software you need.
                </p>
                <p>
                  Alternatively, you can use third-party software like{" "}
                  <a
                    href="https://chirp.danplanet.com/projects/chirp/wiki/Home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CHIRP
                  </a>
                  , but proceed at your own risk, the use of third-party
                  software introduces its own risks.
                </p>
              </section>
              <p>
                With your radio selected, choose which satellites you would like
                to create channels for and program to your radio.
              </p>
              <p>
                Next, choose which channel you would like to to start with. If
                you already have channels programmed into your radio, you may
                want to start with a later, empty, channel. You can always
                change your channel numbering on your own either with a .csv
                editor like Excel or within your{" "}
                <abbr title="customer programming software">CPS</abbr>.
              </p>
              <p>
                Satellite up-link and down-link data for the satellites you've
                selected will be imported, which you can manually override by
                selecting the satellite dropdown, and choosing edit.
              </p>

              <p>
                Choose the power level you would like to use when transmitting.
                It is always recommended that you use the least amount of power
                needed to make a contact, which for satellites can be as little
                as 2 watts.
              </p>
              <p>
                The last step is to configure the naming convention of your
                channels. By default, channels will be named by the satellite
                name, and their channel offset relative to the center channel.
              </p>
              <samp>
                <p className="text-muted ml-5">AO-92 (-3)</p>
              </samp>
              <p>
                You can change the naming convention using{" "}
                <code>#keywords#</code>. The default naming is:
              </p>

              <p className="ml-5">
                &lt;<code>#satellite_name#</code>(<code>#channel_offset#</code>
                )&gt;
              </p>
              <p>
                Lastly, you'll export your channels into a .csv file which you
                can import into the{" "}
                <abbr title="customer programming software">CPS</abbr> of your
                choosing. If you've already created channels, you may want to
                export the existing channels into a .csv, and combine the two by
                copy pasting from one to the other, then import the new file.
              </p>
            </Container>
            <Container>
              <h2>
                <span
                  id="how_does_it_work"
                  style={{
                    marginTop: "-60px",
                    paddingBottom: "60px",
                    display: "block"
                  }}
                ></span>
                How does it work?
              </h2>
              <p>
                Satellite data is acquired from{" "}
                <a
                  href="https://db.satnogs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SatNOGS DB
                </a>
                , and the up-link and down-link frequencies are used to
                automatically generate channels with doppler shift correction
                for easy programming.
              </p>
              <p>
                ChirpSAT is built with{" "}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
                , styled by{" "}
                <a
                  href="https://getbootstrap.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bootstrap
                </a>
                , and uses icons from{" "}
                <a
                  href="https://www.fontawesome.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Font Awesome
                </a>
                .
              </p>
            </Container>
            <Container>
              <h2>
                <span
                  id="who_made_it"
                  style={{
                    marginTop: "-60px",
                    paddingBottom: "60px",
                    display: "block"
                  }}
                ></span>
                Who made it?
              </h2>
              <p>
                ChirpSAT was created by Michael Parry{" "}
                <a
                  href="https://www.qrz.com/db/KE8KDF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KE8KDF
                </a>
                . It was created to simplify the process of programming HTs that
                use a <abbr title="consumer programming software">CPS</abbr>,
                which are often frustrating and tedious to use. If you'd like to
                keep up with the project, check it out on{" "}
                <a
                  href="https://github.com/michael-parry/chirpsat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </Container>
            <Container>
              <h2>
                <span
                  id="how_can_i_help"
                  style={{
                    marginTop: "-60px",
                    paddingBottom: "60px",
                    display: "block"
                  }}
                ></span>
                How can I help?
              </h2>
              <p>
                If you're interested in helping with ChirpSAT, send an email to{" "}
                <a
                  href="mailto:ke8kdf@yahoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KE8KDF@yahoo.com
                </a>
                .
              </p>
            </Container>
          </article>
          <div className="col-2 d-none d-lg-block"></div>
        </div>
      </>
    );
  }
}
