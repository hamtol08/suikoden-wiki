/**
 * 한국어 이름 아래 영문명과 일본어 원문명을 정돈해 보여줍니다.
 */

export type LocalizedNameEntry = {
  label: string;
  value: string;
};

type LocalizedNameListStyles = {
  cardSubName: string;
  cardSubNameLabel: string;
  cardSubNameValue: string;
  cardSubNames: string;
};

type LocalizedNameListProps = {
  entries: readonly LocalizedNameEntry[];
  itemKey: string;
  styles: LocalizedNameListStyles;
};

const LocalizedNameList = ({
  entries,
  itemKey,
  styles,
}: LocalizedNameListProps) => {
  if (entries.length === 0) {
    return null;
  }

  return (
    <dl className={styles.cardSubNames}>
      {entries.map((entry, index) => (
        <div
          className={styles.cardSubName}
          key={`${itemKey}-${entry.label}-${index}`}
        >
          <dt className={styles.cardSubNameLabel}>{entry.label}</dt>
          <dd className={styles.cardSubNameValue}>{entry.value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default LocalizedNameList;
