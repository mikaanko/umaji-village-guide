type SpotNameProps = {
  level: 1 | 3;
  name: string;
};

export function SpotName({ level, name }: SpotNameProps) {
  const [englishName, japaneseName] = name.split(" / ", 2);
  const content = (
    <>
      <span className="spot-name-en" lang="en">
        {englishName}
      </span>
      {japaneseName && (
        <span className="spot-name-ja" lang="ja">
          {japaneseName}
        </span>
      )}
    </>
  );

  if (level === 1) {
    return (
      <h1 className="spot-name" aria-label={name}>
        {content}
      </h1>
    );
  }

  return (
    <h3 className="spot-name" aria-label={name}>
      {content}
    </h3>
  );
}
