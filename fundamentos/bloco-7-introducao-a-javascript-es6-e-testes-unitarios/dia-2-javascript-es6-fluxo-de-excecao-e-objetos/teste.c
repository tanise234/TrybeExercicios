int sum (int a, int b)
{
    if (a==1)
        throw new Error1('cannot be 1');
    if (b==1)
        throw new Error1('cannot be 1');
    if (b==3)
        throw new Error2('cannot be 1');
    return a+b;
}

int main()
{
    try{
    sum(1, 3);
    }
    catch (Error1 erro)
    {
        print error
    }
    catch (Error2 errorw)
    {
        print errorw
    }
}