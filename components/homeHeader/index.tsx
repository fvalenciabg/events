

import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';

function Header(props) {
  const { sections, title } = props;
  const size = 0.4;

  return (
    <React.Fragment>
		<Container maxWidth="lg">
			<Box >
				<Toolbar
					variant="dense"
					elevation={0}

					component="nav"
					sx={{ justifyContent: 'center', overflowX: 'auto', paddingTop:3 }}
				>
					<Image src={"/img/barnaby-logo-white.png"} width={453 * size} height={210*size}></Image>

				</Toolbar>
			</Box>
	  	</Container>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
