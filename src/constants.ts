export const PATTERNS = {
    PASSWORD: '(?=.*[A-Z]).',
    LOGIN: '^(?=.*[a-zA-Z])([a-zA-Z0-9-_]+){3,20}$',
    EMAIL: '^\\S+@\\S+\\.\\S+$',
    NAME: '^[A-ZА-Я][a-zа-я-]*$',
    PHONE: '^[\+][0-9]{10,15}$',
    NOT_EMPTY: '^(?!\s*$).+'
}
