import React from "react";
import theme from "theme";
import { Theme, Link, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"datetime"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box
			height="100vh"
			display="flex"
			align-items="center"
			justify-content="center"
			flex-direction="column"
		>
			<Box display="flex" align-items="center" justify-content="center" margin="40px 0px 0px 0px">
				<Components.DateTimeMaterial
					disabled={false}
					fullWidth
					autofocus={false}
					margin="0px 15px 0px 15px"
					variant="filled"
				/>
				<Components.DateTimeMaterial
					disabled={false}
					fullWidth
					autofocus={false}
					margin="0px 15px 0px 15px"
					variant="outlined"
					color="secondary"
				/>
				<Components.DateTimeMaterial disabled={false} fullWidth autofocus={false} margin="0px 15px 0px 15px" />
				<Components.DateTimeMaterial
					disabled={false}
					fullWidth
					autofocus={false}
					margin="0px 15px 0px 15px"
					type="time"
					helperText="Выберите время"
					label="Завтрак"
				/>
			</Box>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});