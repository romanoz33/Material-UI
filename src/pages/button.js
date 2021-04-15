import React from "react";
import theme from "theme";
import { Theme, Link, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"button"} />
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
				<Components.MaterialBatton disabled={false} display="block" fullWidth={false} margin="0px 5px 0px 5px">
					<Override slot="Button" overflow-wrap="anywhere" text-transform="initial">
						button 1
					</Override>
				</Components.MaterialBatton>
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					color="secondary"
				>
					<Override slot="Button" overflow-wrap="anywhere">
						BUTTON 2
					</Override>
				</Components.MaterialBatton>
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					color="inherit"
				>
					<Override slot="Button" overflow-wrap="anywhere">
						{"\n"}BUTTON 3
					</Override>
				</Components.MaterialBatton>
				<Components.MaterialBatton disabled display="block" fullWidth={false} margin="0px 5px 0px 5px">
					<Override slot="Button" overflow-wrap="anywhere">
						BUTTON 4
					</Override>
				</Components.MaterialBatton>
			</Box>
			<Box display="flex" align-items="center" justify-content="center" margin="40px 0px 0px 0px">
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					variant="outlined"
					color="primary"
				>
					<Override slot="Button" overflow-wrap="anywhere" text-transform="initial">
						button 1
					</Override>
				</Components.MaterialBatton>
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					color="secondary"
					variant="outlined"
				>
					<Override slot="Button" overflow-wrap="anywhere">
						BUTTON 2
					</Override>
				</Components.MaterialBatton>
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					color="inherit"
					variant="outlined"
				>
					<Override slot="Button" overflow-wrap="anywhere">
						{"\n"}BUTTON 3
					</Override>
				</Components.MaterialBatton>
				<Components.MaterialBatton
					disabled
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					variant="outlined"
				>
					<Override slot="Button" overflow-wrap="anywhere">
						BUTTON 4
					</Override>
				</Components.MaterialBatton>
			</Box>
			<Box display="flex" align-items="center" justify-content="center" margin="40px 0px 0px 0px">
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					variant="contained"
					color="primary"
					size="small"
				>
					<Override slot="Button" overflow-wrap="anywhere" text-transform="initial">
						button 1
					</Override>
				</Components.MaterialBatton>
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					color="secondary"
					variant="contained"
				>
					<Override slot="Button" overflow-wrap="anywhere">
						BUTTON 2
					</Override>
				</Components.MaterialBatton>
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth={false}
					margin="0px 5px 0px 5px"
					color="inherit"
					variant="contained"
					size="large"
				>
					<Override slot="Button" overflow-wrap="anywhere">
						{"\n"}BUTTON 3
					</Override>
				</Components.MaterialBatton>
			</Box>
			<Box
				display="flex"
				align-items="center"
				justify-content="center"
				margin="40px 0px 0px 0px"
				width="100%"
			>
				<Components.MaterialBatton
					disabled={false}
					display="block"
					fullWidth
					margin="0px 5px 0px 5px"
					variant="contained"
					color="primary"
					size="small"
					width="100%"
				>
					<Override slot="Button" text-transform="initial" disabled={false}>
						button 1
					</Override>
				</Components.MaterialBatton>
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