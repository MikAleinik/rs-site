import classNames from 'classnames/bind';
import { communicationSectionLocales } from './locales';
import { DiscordLogo } from '@/shared/icons/discord-logo';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  CourseNamesChannels,
  DISCORD_LINKS,
  RS_DOCS_COMMUNICATION_LINK,
  RS_DOCS_TELEGRAM_CHATS_LINK,
} from 'data';

import styles from './communication.module.scss';

const cx = classNames.bind(styles);

type CommunicationProps = {
  courseName: CourseNamesChannels;
  lang?: 'ru' | 'en';
};

export const Communication = ({ courseName, lang = 'en' }: CommunicationProps) => {
  const {
    title,
    subTitle,
    firstParagraphFirstHalf,
    discordLink,
    firstParagraphSecondHalf,
    secondParagraphFirstHalf,
    telegramLink,
    secondParagraphSecondHalf,
    thirdParagraphFirstHalf,
    rsDocsLink,
    thirdParagraphSecondHalf,
  } = communicationSectionLocales[lang];

  return (
    <section className={cx('container')}>
      <article className={cx('content', 'communication-content')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className={cx('communication-text')}>
          <figure className={cx('discord-logo-wrapper')}>
            <DiscordLogo />
          </figure>
          <div>
            <Subtitle>{subTitle}</Subtitle>
            <Paragraph className={cx('communication-paragraph')}>
              {firstParagraphFirstHalf}
              <LinkCustom href={DISCORD_LINKS[courseName]} external>
                {discordLink}
              </LinkCustom>
              {firstParagraphSecondHalf}
            </Paragraph>
            <Paragraph className={cx('communication-paragraph')}>
              {secondParagraphFirstHalf}
              <LinkCustom href={RS_DOCS_TELEGRAM_CHATS_LINK} external>
                {telegramLink}
              </LinkCustom>
              {secondParagraphSecondHalf}
            </Paragraph>
            <Paragraph className={cx('communication-paragraph')}>
              {thirdParagraphFirstHalf}
              <LinkCustom href={RS_DOCS_COMMUNICATION_LINK} external>
                {rsDocsLink}
              </LinkCustom>
              {thirdParagraphSecondHalf}
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
