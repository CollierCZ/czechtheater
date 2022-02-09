import React from "react";

import Layout from "../layout/layout";
import Seo from "../components/Seo/Seo";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";

const Contest = ({ data }) => {
  return (
    <Layout>
      <Seo pageTitle="Contest to win the book B. Proudew" />
      <h1>Contest to win the book B. Proudew</h1>
      <section>
        <h2>Rules</h2>
        <p>The following rules apply to the contest to win the book <em>B. Proudew</em>:</p>
        <ol>
          <li>The contest is held by Czech Theater, z.s. with its registered office at Tučkova 915/22, Veveří, 602 00 Brno, Company ID No. 07245904, entered into the Commercial Register maintained by the Regional Court in Brno, file L 24928 ("Czech Theater").</li>
          <li>The contest is open to all legal residents of the Czech Republic aged 18 and older except for members of Czech Theater and their immediate family.</li>
          <li>This contest is in no way sponsored, endorsed, administered by, or associated with Facebook.</li>
          <li>The prize for the contest comprises copies of the book <em>B. Proudew</em>, written by Irena Dousková and translated by Melvyn Clarke. More information about the book is available at the <a href="https://www.czechlit.cz/en/book/b-proudew-en/">Czech Lit website</a>.</li>
          <li>There are two ways for participants to win a book:
            <ol type="a">
              <li>Each Thursday from January 20 through February 9, 2022, Czech Theater will post one question on its Facebook page located at <a href="https://www.facebook.com/czechtheater/">https://www.facebook.com/czechtheater/</a>. The first person to send the correct answer to the question to Czech Theater, whether by commenting on the Facebook post, sending a private message through Facebook, or sending an email to <a href="mailto:czechtheater@gmail.com">czechtheater@gmail.com</a>, will win the prize.</li>
              <li>At each of the performances of the play <em>B. Proudew</em> by Czech Theater, one audience member will be selected. A number out of the total number of tickets sold (for example, 12) will be chosen. The person who enters the theater as that number (for example, the 12th person to enter) will win the prize.</li>
            </ol>
          </li>
          <li>Once a participant has won a prize, they become ineligible for further prizes. The next eligible participant will become the winner.</li>
          <li>Prizes must be collected in person in the Brno center or at one of Czech Theater's performances in Prague. If a winner is unable to collect the prize or within a week of winning arrange a time and place for collection, they forfeit the prize back to Czech Theater.</li>
          <li>Czech Theater will collect only the personal data that participants provide to it for the purposes of participanting or arranging collection of a prize, such as the participant's name, email address, or phone number to arrange collection. None of this information will be stored beyond the purpose of providing prizes to contest winners. By submitting personal data to Czech Theater within the contest, you consent to your data being used for this purpose. Czech Theater will not use this information for any other puposes, including marketing, without further explicit consent by the participant.</li>
          <li>Czech Theater reserves the right to cancel or postpone the contest or change its rules at any time for any reason, including, but not limited to, because of the COVID-19 pandemic. Any changes to the rules will be announced on the Facebook page of Czech Theater and placed here.</li>
          <li>By participanting in the contest, you agree to abide by these rules.</li>
        </ol>
        <p>These rules were compiled in Brno on January 14, 2022 and updated in Brno on February 9, 2022.</p>
      </section>
      <section className="contact">
        <h2>Contact us</h2>
        <p>
          Registered Office (mailing address):<br />
          Czech Theater, z.s.<br />
          Tučkova 915/22, Veveří<br />
          602 00 Brno
        </p>
        <SocialMediaIcons
          urls={["https://www.facebook.com/czechtheater/","https://www.instagram.com/czechtheater/","czechtheater@gmail.com"]}
          color="green"
        />
      </section>
    </Layout>
  );
};

export default Contest;