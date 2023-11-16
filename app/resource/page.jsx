"use client"
import { Container } from "/components/container";
import { LockIcon, UsersIcon, ChartIcon, WalletIcon } from "/components/icons";
import styles from "/styles/index.module.scss";
import Link from "next/link";
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';

export default function Resource() {
  const [likeCount, setLikeCount] = React.useState(0);
  const [viewCount, setViewCount] = React.useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handleViewClick = () => {
    setViewCount(viewCount + 1);
  };

  return (
    <Container title="Resource">
      <div>
        <div className={styles.heading}>
          <div>Documents</div>
          <div>
            Explore, Learn, Create, Innovate
          </div>
        </div>
        <div className={styles.maincards}>
          <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src="/dsa.png"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="danger"
                onClick={handleLikeClick} 
                sx={{
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  right: '1rem',
                  bottom: 0,
                  transform: 'translateY(50%)',
                }}
              >
                <Favorite />
              </IconButton>
            </CardOverflow>
            <CardContent>
              <Link href='/dsa'>
                <Typography level="title-md">
                  Data Structure & Algorithm
                </Typography>
              </Link>
              <Typography level="body-sm">
                By Study Link
              </Typography>
            </CardContent>
            <CardOverflow variant="soft">
              <Divider inset="context" />
              <CardContent orientation="horizontal">
                <Typography level="body-xs">{likeCount} Likes</Typography>
                <Divider orientation="vertical" />
                <Typography level="body-xs">{viewCount} Views</Typography>
              </CardContent>
            </CardOverflow>
          </Card>
        </div>
      </div>
    </Container>
  );
}
