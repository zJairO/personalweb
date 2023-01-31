import logo from "./wizard.gif";
import "./App.css";

function App() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-xs-1' align="center">
					<div className="terminal" data-bs-theme="light" align="left">
          <i class="fa-solid fa-circle"/>&nbsp;&nbsp;&nbsp;
          <i class="fa-solid fa-circle"/>&nbsp;&nbsp;&nbsp;
          <i class="fa-solid fa-circle"/>&nbsp;&nbsp;&nbsp;
          <br/>
          <br/>
						<span class="green">
							<i class="fa-solid fa-ghost" />
							&nbsp;&nbsp;cat
						</span>{" "}
						<span class="orange">
							{" "}
							<a class="orange" href="#about_me">
								about_me.txt
							</a>
						</span>
						<br />
						<br />- - - - - - - - - - - - - - - - - - - - - - - - - - -
						<br />
						<br />
						<img src={logo} alt="wizard.gif" />
						<br />
						<br />
						Hey, my name is Jairo, I am a software engineer who enjoys the focus
						and logic behind every line of code I write.
						<br />
						<br />
						Developer in JavaScript, Python and Php, currently specialized in
						web development with a lot of experience in UNIX and GNU/Linux
						operating systems.
						<br />
						<br />
						Developer in JavaScript, Python and Php, currently specialized in
						web development with a lot of experience in UNIX and GNU/Linux
						operating systems.
						<br />
						<br />
						Love to program anything, learn stuff every day and be part of open
						source community.
						<br />
						<br />
						If you want to buy me a coffee here is my bitcoin address:{" "}
						<a
							class="orange"
							href="https://btcscan.org/address/bc1q003y9pr2c6gz72dw7cagsgd397nuwvq4gdp29x"
						>
							bc1q003y9pr2c6gz72dw7cagsgd397nuwvq4gdp29x
						</a>
						<br />
						<br />
						See you later!
						<br />
						<br />
						<a class="orange" href="https://dev.to/zjairo" target="_blank">
							<i class="fa-solid fa-square-rss"/>
						</a>
						&nbsp;&nbsp;
						<a
							class="orange"
							href="https://www.youtube.com/channel/UC3Zxq2C-1m0jOKGDT0Fbrbw"
							target="_blank"
						>
							<i class="fa-brands fa-youtube"/>
						</a>
						&nbsp;&nbsp;
						<a class="orange" href="https://github.com/zjairo" target="_blank">
							<i class="fa-brands fa-github-alt"/>
						</a>
						&nbsp;&nbsp;
						<a
							class="orange"
							href="https://discord.gg/mexicodev"
							target="_blank"
						>
							<i class="fa-brands fa-discord"/>
						</a>
						&nbsp;&nbsp;
						<a
							class="orange"
							href="/cdn-cgi/l/email-protection#b9d1dcd5d5d6f9c3d3d8d0cbd697dad6d4"
							target="_blank"
						>
							<i class="fa-solid fa-envelope"/>
						</a>
            <br/><br/>
            - - - - - - - - - - - - - - - - - - - - - - - - - - -
            <br/><br/>
            <span class="green"><i class="fa-solid fa-ghost"/></span>&nbsp;&nbsp;_
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
