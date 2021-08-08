import bcrypt from 'bcryptjs';

export const hash = async(str, round) => {
    const salt = await bcrypt.genSalt(round);
    return await bcrypt.hash(str, salt);
}

