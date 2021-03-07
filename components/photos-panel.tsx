import styles from "./photos-panel.module.scss";
import Photo from "./photo";
import { useState } from "react";

interface Props {
  images: string[];
  alt?: string;
}

export const PhotosPanel = (props: Props) => {
  const { images, alt } = props;
  const [selected, setSelected] = useState(0);

  const handleChange = (i: number) => {
    setSelected(i);
  };

  return (
    <div className={styles.panel}>
      <ul className={styles.panel__thumbnails}>
        {images.map((s, i) => {
          const isSelected = selected === i;
          const styleBorder = isSelected
            ? styles.panel__selected
            : styles.panel__portrait;
          return (
            <li
              onClick={() => handleChange(i)}
              className={styleBorder}
              key={`${i}-${s}`}
            >
              <Photo
                minHeight={"100px"}
                maxHeight={"100px"}
                src={s}
                alt={alt}
              />
            </li>
          );
        })}
      </ul>
      <div className={styles.panel__portrait}>
        <Photo height={"400px"} src={images[selected]} alt={alt} />
      </div>
    </div>
  );
};
