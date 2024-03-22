import styles from './NotificationTemplate.module.css';

export interface INotificationTemplate {
  sampleTextProp: string;
}

const NotificationTemplate: React.FC<INotificationTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default NotificationTemplate;