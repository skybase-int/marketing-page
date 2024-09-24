import { BP, useBreakpointIndex } from '../hooks/useBreakpointIndex';

export const TrianglesSeparator = ({
  position = 'bottomLeft',
  colorBottom = 'nightfall-1',
  colorTop = 'nightfall-1',
  colorMiddle
}: {
  position?: 'bottomLeft' | 'topRight';
  colorBottom?: string;
  colorTop?: string;
  colorMiddle?: string;
}) => {
  const { bpi } = useBreakpointIndex();

  return (
    <div className="pointer-events-none relative h-[100px] overflow-hidden tablet:h-[200px] desktop:h-[250px]">
      <div
        className={`pointer-events-none z-20 bg-${colorBottom}`}
        style={{
          width: '110%',
          height: '150px',
          position: 'absolute',
          top: position === 'bottomLeft' ? '100%' : '-150px',
          [position === 'bottomLeft' ? 'left' : 'right']: 0,
          transformOrigin: position === 'bottomLeft' ? 'top left' : 'bottom right',
          rotate: bpi === BP.sm ? '-6deg' : bpi === BP.md ? '-4.5deg' : '-3deg'
        }}
      />
      {colorMiddle && (
        <div
          className={`pointer-events-none z-[15] bg-${colorMiddle}`}
          style={{
            width: '110%',
            height: '150px',
            position: 'absolute',
            top: position === 'bottomLeft' ? '100%' : '-150px',
            [position === 'bottomLeft' ? 'left' : 'right']: 0,
            transformOrigin: position === 'bottomLeft' ? 'top left' : 'bottom right',
            rotate: bpi === BP.sm ? '-9deg' : bpi === BP.md ? '-6.75deg' : '-4.25deg'
          }}
        />
      )}
      <div
        className={`pointer-events-none z-10 bg-${colorTop}`}
        style={{
          width: '110%',
          height: '150px',
          position: 'absolute',
          top: position === 'bottomLeft' ? '100%' : '-150px',
          [position === 'bottomLeft' ? 'left' : 'right']: 0,
          transformOrigin: position === 'bottomLeft' ? 'top left' : 'bottom right',
          rotate: bpi === BP.sm ? '-12deg' : bpi === BP.md ? '-9deg' : '-5.5deg'
        }}
      />
    </div>
  );
};
