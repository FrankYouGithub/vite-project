/*
 * @Author       : frank
 * @Date         : 2022-04-19 09:48:00
 * @LastEditTime : 2022-04-19 11:22:16
 * @LastEditors  : frank
 * @Description  : In User Settings Edit
 */
export interface SvgIconProps {
  name?: string;
  prefix?: string;
  color?: string;
  [key: string]: string;
}

export default function SvgIcon({
  name,
  prefix = 'icon',
  color = '#333',
  ...props
}: SvgIconProps) {
  const symbolId = `#${prefix}-${name}`;
  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  );
}
