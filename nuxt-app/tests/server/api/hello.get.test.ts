import { describe, it, expect, vi } from 'vitest';
import helloHandler from '../../../server/api/hello.get';

vi.mock('../../../server/api/hello.get', () => ({
    default: () => ({
        message: 'Hello, world!',
    }),
}));

describe('API Hello Handler', () => {
    it('should return a greeting message', async () => {
        const result = helloHandler();
        expect(result).toEqual({
            message: 'Hello, world!',
        });
    });
});
